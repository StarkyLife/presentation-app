import React, {
    useCallback, useReducer,
} from 'react';
import { Link } from '@alfalab/core-components/link';
import { List } from '@alfalab/core-components/list';
import { ListHeader } from '@alfalab/core-components/list-header';
import { Typography } from '@alfalab/core-components/typography';

import { usePageKeyDown } from '../../hooks/key-press-hooks';
import { TestIds } from '../../test-ids';

import { PairingProsCons } from './pairing-pros-cons';

import './styles.css';

const usefulLinks: Array<{ title: string; url: string }> = [
    {
        title: 'https://habr.com/ru/company/barsgroup/blog/533630/',
        url: 'Парное программирование: стили, организация, тайм-менеджмент',
    },
];

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

    const handlePageStatusChange = useCallback(() => {
        dispatch({ type: 'increment' });
    }, [dispatch]);

    usePageKeyDown('ArrowRight', handlePageStatusChange);

    return (
        <section>
            <Typography.Title tag="h1" dataTestId={ TestIds.PAGE_TITLE }>
                Парное программирование
            </Typography.Title>
            <div data-test-id={ TestIds.PAIR_PAGE_PICTURE_BLOCK }>
                <img
                    className="pair-programming-page-img"
                    src="https://habrastorage.org/webt/vd/up/uv/vdupuvortchb0ckbjfgufmoizj8.jpeg"
                    alt="Иллюстрация парного программирования"
                />
            </div>
            { pageStatus > 0 && (
                <PairingProsCons />
            ) }
            { pageStatus > 1 && (
                <div data-test-id={ TestIds.PAIR_PAGE_SUGGESTIONS_BLOCK }>
                    <ListHeader title="Полезные ссылки" />
                    <List>
                        { usefulLinks.map((l) => (
                            <Link href={ l.url }>{ l.title }</Link>
                        )) }
                    </List>
                </div>
            ) }
        </section>
    );
};
