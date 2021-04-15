import { useCallback, useEffect, useReducer } from 'react';

export function usePageKeyDown(handler: (e: KeyboardEvent) => void) {
    useEffect(() => {
        document.addEventListener('keydown', handler);

        return () => {
            document.removeEventListener('keydown', handler);
        };
    }, [handler]);
}

function secretTypingReducer(
    state: string,
    action: { type: 'add'; key: string } | { type: 'clear' },
) {
    switch (action.type) {
        case 'add':
            return state + action.key;
        case 'clear':
            return '';
        default:
            return state;
    }
}

export function useSecretCodeTyping(
    secretCode: string,
    handler: () => void,
) {
    const [currentTypedString, dispatch] = useReducer(
        secretTypingReducer,
        '',
    );

    const handleKeyType = useCallback((e: KeyboardEvent) => {
        dispatch({ type: 'add', key: e.key });
    }, [dispatch]);

    usePageKeyDown(handleKeyType);

    useEffect(() => {
        if (currentTypedString.includes(secretCode)) {
            dispatch({ type: 'clear' });
            handler();
        }
    }, [secretCode, handler, currentTypedString, dispatch]);
}
