import React from 'react';
import { Typography } from '@alfalab/core-components/typography';

import { TestIds } from '../test-ids';

export const TddPage: React.FC = () => (
    <Typography.Title tag="h1" dataTestId={ TestIds.PAGE_TITLE }>
        Test-Driven Development
    </Typography.Title>
);
