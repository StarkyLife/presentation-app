import React from 'react';
import { List } from '@alfalab/core-components/list';
import { Plate } from '@alfalab/core-components/plate';
import { Space } from '@alfalab/core-components/space';
import { Typography } from '@alfalab/core-components/typography';

type Props = {
    pros: string[];
    cons: string[];
    dataTestId?: string;
};

export const ProsConsBlock: React.FC<Props> = ({
    pros,
    cons,
    dataTestId,
}) => (
    <div data-test-id={ dataTestId }>
        <Space direction="vertical" fullWidth={ true }>
            <Plate view="positive" title="Плюсы">
                <List>
                    { pros.map((t) => (
                        <Typography.Text key={ t }>{ t }</Typography.Text>
                    )) }
                </List>
            </Plate>
            <Plate view="negative" title="Минусы">
                <List>
                    { cons.map((t) => (
                        <Typography.Text key={ t }>{ t }</Typography.Text>
                    )) }
                </List>
            </Plate>
        </Space>
    </div>
);
