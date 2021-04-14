import React from 'react';
import { Typography } from '@alfalab/core-components/typography';

import { TestIds } from '../test-ids';

export const PairProgrammingPage: React.FC = () => (
    <Typography.Title tag="h1" dataTestId={ TestIds.PAGE_TITLE }>
        Парное программирование
    </Typography.Title>
);
