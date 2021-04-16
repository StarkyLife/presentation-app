import React, { } from 'react';
import { Typography } from '@alfalab/core-components/typography';

import { useGallery } from '../../hooks/gallery';
import emptyStepsImgUrl from '../../talk-data/empty-steps.png';
import filledStepsImgUrl from '../../talk-data/filled-steps.png';
import { TestIds } from '../../test-ids';
import { Image } from '../ui/image';

type Phase = { title: string; imgUrl: string };

const galleryPhases: Phase[] = [
    { title: 'Пример незаполненных шагов', imgUrl: emptyStepsImgUrl },
    { title: 'Пример заполненных шагов', imgUrl: filledStepsImgUrl },
];

export const BddAutomationBlock: React.FC = () => {
    const currentPhase = useGallery(galleryPhases);

    return (
        <div data-test-id={ TestIds.BDD_AUTOMATION_BLOCK }>
            <Typography.Title tag="h4">
                { currentPhase.title }
            </Typography.Title>
            <Image url={ currentPhase.imgUrl } altText={ currentPhase.title } />
        </div>
    );
};
