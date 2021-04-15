import React from 'react';

import './styles.css';

type Props = {
    url: string;
    altText: string;
};

export const Image: React.FC<Props> = ({
    url,
    altText,
}) => (
    <img
        className="image"
        src={ url }
        alt={ altText }
    />
);
