import React from 'react';

import './styles.css';

type Props = {
    url: string;
    altText: string;
    isSmall?: boolean;
};

export const Image: React.FC<Props> = ({
    url,
    altText,
    isSmall,
}) => (
    <img
        className={ `image${isSmall ? ' image__small' : ''}` }
        src={ url }
        alt={ altText }
    />
);
