import React from 'react';
import { List } from '@alfalab/core-components/list';
import { Plate } from '@alfalab/core-components/plate';
import { Space } from '@alfalab/core-components/space';
import { Typography } from '@alfalab/core-components/typography';

import { TestIds } from '../../test-ids';

const pros: string[] = [
    'Меньше отвлекаешься и не растягивается время начала работы над задачей.',
    'Уменьшается время, потраченное на "затупы".',
    'Ревью кода и взгляд со стороны в моменте. Как итог, более качественное решение за меньшее время.',
    'Происходит обмен опытом и знаниями.',
];
const cons: string[] = [
    'Вместо двух задач делается одно.',
    'Двое могут заболтаться на отвлеченные темы.',
];

export const PairingProsCons: React.FC = () => (
    <div data-test-id={ TestIds.PAIR_PAGE_PROS_CONS_BLOCK }>
        <Space
            direction="vertical"
            fullWidth={ true }
            dataTestId={ TestIds.PAIR_PAGE_PROS_CONS_BLOCK }
        >
            <Plate view="positive" title="Плюсы">
                <List>
                    { pros.map((t) => (
                        <Typography.Text>{ t }</Typography.Text>
                    )) }
                </List>
            </Plate>
            <Plate view="negative" title="Минусы">
                <List>
                    { cons.map((t) => (
                        <Typography.Text>{ t }</Typography.Text>
                    )) }
                </List>
            </Plate>
        </Space>
    </div>
);
