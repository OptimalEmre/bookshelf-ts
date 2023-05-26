import { Dispatch, Reducer, useCallback, useReducer, useRef } from 'react';
import { useSafeDispatch } from './useSafeDispatch';
import { TypeOfTag } from 'typescript';

interface UseAsyncState<T> {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  data?: T | null;
  error?: Error | null;
}

function asyncReducer<T>(
  state: UseAsyncState<T>,
  newState: UseAsyncState<T>
): UseAsyncState<T> {
  return { ...state, ...newState };
}

function useAsync<T>(initialState?: UseAsyncState<T>) {
  const initialStateRef = useRef<UseAsyncState<T>>({
    status: 'idle',
    data: null,
    error: null,
    ...initialState,
  });

  const [{ status, data, error }, setState] = useReducer(
    asyncReducer<T>,
    initialStateRef.current
  );

  const safeSetState = useSafeDispatch(setState);

  const setData = useCallback(
    (data: T) => safeSetState({ data, status: 'resolved' }),
    [safeSetState]
  );

  const setError = useCallback(
    (error: Error) => safeSetState({ error, status: 'rejected' }),
    [safeSetState]
  );

  const reset = useCallback(
    () => safeSetState(initialStateRef.current),
    [safeSetState]
  );

  const run = useCallback(
    (promise: Promise<T | Error>) => {
      if (!promise || !promise.then) {
        throw new Error(
          `The argument passed to useAsync().run must be a promise. Maybe a function that's passed isn't returning anything?`
        );
      }

      safeSetState({ status: 'pending' });
      promise.then(
        (data) => {
          setData(data as T);
          return data as T;
        },
        (error) => {
          setError(error as Error);
          return Promise.reject(error);
        }
      );
    },
    [safeSetState, setData, setError]
  );

  return {
    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isSuccess: status === 'resolved',
    isError: status === 'rejected',

    setData,
    setError,
    run,
    reset,
    status,
    data,
    error,
  };
}

export { useAsync };
