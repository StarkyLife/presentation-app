import React from 'react';
import { Link } from '@alfalab/core-components/link';
import { List } from '@alfalab/core-components/list';
import { ListHeader } from '@alfalab/core-components/list-header';

import { LinkData } from '../../../types/link-data';

type Props = {
    links: LinkData[];
    dataTestId?: string;
};

export const LinksBlock: React.FC<Props> = ({
    links,
    dataTestId,
}) => (
    <div data-test-id={ dataTestId }>
        <ListHeader title="Полезные ссылки" />
        <List>
            { links.map((l) => (
                <Link key={ l.title } href={ l.url } target="_blank">{ l.title }</Link>
            )) }
        </List>
    </div>
);
