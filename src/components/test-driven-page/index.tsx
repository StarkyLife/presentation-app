/* eslint-disable max-len */
import React from 'react';
import { Link } from '@alfalab/core-components/link';
import { List } from '@alfalab/core-components/list';
import { ListHeader } from '@alfalab/core-components/list-header';
import { Typography } from '@alfalab/core-components/typography';

import { TestIds } from '../../test-ids';

export const TddPage: React.FC = () => (
    <section>
        <Typography.Title defaultMargins={ true } tag="h1" dataTestId={ TestIds.PAGE_TITLE }>
            Test-Driven Development
        </Typography.Title>
        <ListHeader title="The Three Rules of TDD" />
        <List>
            <Typography.Text>Write production code only to pass a failing unit test.</Typography.Text>
            <Typography.Text>Write no more of a unit test than sufficient to fail (compilation failures are failures).</Typography.Text>
            <Typography.Text>Write no more production code than necessary to pass the one failing unit test.</Typography.Text>
        </List>
        <ListHeader title="Ссылки" />
        <Link
            href="https://youtu.be/58jGpV2Cg50?t=1301"
            target="_blank"
        >
            Объяснение и демонстрация TDD
        </Link>
    </section>
);
