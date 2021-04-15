import { useCallback, useEffect } from 'react';

export function usePageKeyDown(key: string, handler: () => void) {
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === key) {
            handler();
        }
    }, [handler, key]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);
}
