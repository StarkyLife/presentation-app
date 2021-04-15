import React, {
    useCallback, useReducer,
} from 'react';
import { Typography } from '@alfalab/core-components/typography';

import { usePageKeyDown } from '../../hooks/key-press-hooks';
import { pairingCons, pairingPros } from '../../talk-data/pair-pros-cons';
import { pairingLinks } from '../../talk-data/useful-links';
import { TestIds } from '../../test-ids';
import { Image } from '../ui/image';
import { LinksBlock } from '../ui/links-block';
import { ProsConsBlock } from '../ui/pros-cons-block';

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
                <Image
                    url="https://habrastorage.org/webt/vd/up/uv/vdupuvortchb0ckbjfgufmoizj8.jpeg"
                    altText="Иллюстрация парного программирования"
                />
            </div>
            { pageStatus > 0 && (
                <ProsConsBlock
                    pros={ pairingPros }
                    cons={ pairingCons }
                    dataTestId={ TestIds.PAIR_PAGE_PROS_CONS_BLOCK }
                />
            ) }
            { pageStatus > 1 && (
                <LinksBlock
                    links={ pairingLinks }
                    dataTestId={ TestIds.PAIR_PAGE_SUGGESTIONS_BLOCK }
                />
            ) }
        </section>
    );
};
