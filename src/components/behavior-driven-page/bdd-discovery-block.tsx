import React, { } from 'react';

import { useGallery } from '../../hooks/gallery';
import { TestIds } from '../../test-ids';
import { Image } from '../ui/image';

const galleryPhases: React.ReactNode[] = [
    <Image
        url="https://habrastorage.org/webt/kf/gp/qk/kfgpqkezunukspp0ht83v9d0qba.png"
        altText="3 Amigos expertises image"
        isSmall={ true }
    />,
    <Image
        url="https://habrastorage.org/webt/ej/ia/ic/ejiaic0jj727yp2voxx37q_37mi.png"
        altText="3 Amigos image"
        isSmall={ true }
    />,
];

export const BddDiscoveryBlock: React.FC = () => {
    const currentPhaseComponent = useGallery(galleryPhases);

    return (
        <div data-test-id={ TestIds.BDD_DISCOVERY_BLOCK }>
            { currentPhaseComponent }
        </div>
    );
};
