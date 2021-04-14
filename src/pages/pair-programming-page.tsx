import React, {
    useCallback, useEffect, useReducer,
} from 'react';
import { Typography } from '@alfalab/core-components/typography';

import { TestIds } from '../test-ids';

function pageStatusReducer(
    state: number,
    action: { type: 'increment' },
) {
    return action.type === 'increment'
        ? state + 1
        : state;
}

export const PairProgrammingPage: React.FC = () => {
    const [pageStatus, dispatch] = useReducer(pageStatusReducer, 0);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'ArrowRight') {
            dispatch({ type: 'increment' });
        }
    }, [dispatch]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <section>
            <Typography.Title tag="h1" dataTestId={ TestIds.PAGE_TITLE }>
                Парное программирование
            </Typography.Title>
            <Typography.Text tag="p" dataTestId={ TestIds.PAIR_PAGE_PROBLEM_BLOCK }>
                Описание проблемы
            </Typography.Text>
            { pageStatus > 0 && (
                <Typography.Text tag="p" dataTestId={ TestIds.PAIR_PAGE_PICTURE_BLOCK }>
                    Иллюстрация
                </Typography.Text>
            ) }
            { pageStatus > 1 && (
                <Typography.Text tag="p" dataTestId={ TestIds.PAIR_PAGE_SUGGESTIONS_BLOCK }>
                    Предложения
                </Typography.Text>
            ) }
        </section>
    );
};
