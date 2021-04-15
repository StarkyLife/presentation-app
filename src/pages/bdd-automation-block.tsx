import React, { } from 'react';
import { Typography } from '@alfalab/core-components/typography';

import { useGallery } from '../hooks/gallery';

type Phase = { title: string };

const galleryPhases: Phase[] = [
    { title: 'Пример незаполненных шагов' },
    { title: 'Пример заполненного шага' },
];

export const BddAutomationBlock: React.FC = () => {
    const currentPhase = useGallery(galleryPhases);

    return (
        <Typography.Text>
            { currentPhase.title }
        </Typography.Text>
    );
};
