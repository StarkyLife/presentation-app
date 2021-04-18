import React from 'react';
import { Typography } from '@alfalab/core-components/typography';

import { useGallery } from '../../hooks/gallery';
import { pairingCons, pairingPros } from '../../talk-data/pair-pros-cons';
import { TestIds } from '../../test-ids';
import { Image } from '../ui/image';
import { ProsConsBlock } from '../ui/pros-cons-block';

const galleryPhases: React.ReactNode[] = [
    <div data-test-id={ TestIds.PAIR_PAGE_PICTURE_BLOCK }>
        <Image
            url="https://habrastorage.org/webt/vd/up/uv/vdupuvortchb0ckbjfgufmoizj8.jpeg"
            altText="Иллюстрация парного программирования"
        />
    </div>,
    <ProsConsBlock
        pros={ pairingPros }
        cons={ pairingCons }
        dataTestId={ TestIds.PAIR_PAGE_PROS_CONS_BLOCK }
    />,
];

export const PairProgrammingPage: React.FC = () => {
    const currentPhaseComponent = useGallery(galleryPhases);

    return (
        <section>
            <Typography.Title defaultMargins={ true } tag="h1" dataTestId={ TestIds.PAGE_TITLE }>
                Парное программирование
            </Typography.Title>
            { currentPhaseComponent }
        </section>
    );
};
