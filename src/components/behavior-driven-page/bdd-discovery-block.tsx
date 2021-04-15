import React, { } from 'react';
import { Typography } from '@alfalab/core-components/typography';

import { useGallery } from '../../hooks/gallery';
import { Image } from '../ui/image';

const galleryPhases: React.ReactNode[] = [
    <Typography.Title tag="h4">3 Амиго</Typography.Title>,
    <Image
        url="https://habrastorage.org/webt/kf/gp/qk/kfgpqkezunukspp0ht83v9d0qba.png"
        altText="3 Amigos expertises image"
    />,
    <Image
        url="https://habrastorage.org/webt/ej/ia/ic/ejiaic0jj727yp2voxx37q_37mi.png"
        altText="3 Amigos image"
    />,
];

export const BddDiscoveryBlock: React.FC = () => {
    const currentPhaseComponent = useGallery(galleryPhases);

    return (
        <div>
            { currentPhaseComponent }
        </div>
    );
};
