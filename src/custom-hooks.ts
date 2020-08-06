import React, {
    useCallback,
    useEffect,
    useRef,
    useState
} from "react";

export function useInstance<T>(initialValue: T | null): [() => T, React.Dispatch<React.SetStateAction<T | null>>, React.RefObject<T>] {
    const [instance, setInstance] = useState<T | null>(initialValue);
    const instanceRef = useRef<T>(instance);
    const getInst = useCallback(() => instanceRef.current, []);

    useEffect(() => {
        instanceRef.current = instance;
    }, [instance]);

    return [
        getInst,
        setInstance,
        instanceRef
    ];
}

export function usePrevious<T>(value: T): T | null {
    const ref = useRef<T | null>();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}
