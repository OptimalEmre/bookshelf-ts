import { Dispatch, useCallback, useLayoutEffect, useRef } from 'react';

function useSafeDispatch<T>(dispatch: Dispatch<T>) {
  const mounted = useRef(false);

  useLayoutEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  return useCallback(
    (args: T) => {
      if (mounted.current) {
        return dispatch(args);
      }
    },
    [dispatch]
  );
}

export { useSafeDispatch };
