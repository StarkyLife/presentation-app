import { useCallback, useReducer } from 'react';

import { usePageKeyDown } from './key-press-hooks';

export function useGallery<Data>(
    galleryData: Data[],
) {
    const galleryPhaseReducer = useCallback((
        state: number,
        action: { type: 'next' } | { type: 'prev' },
    ) => {
        switch (action.type) {
            case 'next':
                return state >= galleryData.length - 1
                    ? state
                    : state + 1;
            case 'prev':
                return state <= 0
                    ? state
                    : state - 1;
            default:
                return state;
        }
    }, [galleryData]);

    const [phaseIdx, dispatch] = useReducer(
        galleryPhaseReducer,
        0,
    );

    const handleNextPhaseAction = useCallback((e: KeyboardEvent) => {
        if (e.key === 'ArrowRight') dispatch({ type: 'next' });
    }, [dispatch]);
    const handlePrevPhaseAction = useCallback((e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft') dispatch({ type: 'prev' });
    }, [dispatch]);

    usePageKeyDown(handleNextPhaseAction);
    usePageKeyDown(handlePrevPhaseAction);

    return galleryData[phaseIdx];
}
