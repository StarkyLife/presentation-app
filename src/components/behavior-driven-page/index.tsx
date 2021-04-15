import React, { useCallback, useState } from 'react';
import { SelectedId, Tab, TabsResponsive } from '@alfalab/core-components/tabs';
import { Typography } from '@alfalab/core-components/typography';

import { TestIds } from '../../test-ids';
import { BddAutomationBlock } from '../xtreme-scheme-page/bdd-automation-block';

export const BehaviorDrivenPage: React.FC = () => {
    const [selectedTab, setTabId] = useState<SelectedId>('');

    const handleTabChange = useCallback((
        _e: MouseEvent,
        { selectedId }: { selectedId: SelectedId },
    ) => {
        setTabId(selectedId);
    }, [setTabId]);

    return (
        <section>
            <Typography.Title tag="h1" dataTestId={ TestIds.PAGE_TITLE }>
                Behavior-Driven Development
            </Typography.Title>
            <TabsResponsive onChange={ handleTabChange } selectedId={ selectedTab }>
                <Tab title="Discovery" id="Discovery">
                    <Typography.Text>
                        3 Амиго
                    </Typography.Text>
                </Tab>
                <Tab title="Formulation" id="Formulation">
                    <Typography.Text>
                        Пример feature файла в cucumber
                    </Typography.Text>
                </Tab>
                <Tab title="Automation" id="Automation">
                    <BddAutomationBlock />
                </Tab>
            </TabsResponsive>
        </section>
    );
};
