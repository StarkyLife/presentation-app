import React, { useCallback, useState } from 'react';
import { Tab, TabsResponsive } from '@alfalab/core-components/tabs';
import { Typography } from '@alfalab/core-components/typography';

import { useSecretCodeTyping } from '../../hooks/key-press-hooks';
import { useTabsControl } from '../../hooks/tabs-control';
import { bddLinks } from '../../talk-data/useful-links';
import { TestIds } from '../../test-ids';
import { LinksBlock } from '../ui/links-block';

import { BddAutomationBlock } from './bdd-automation-block';
import { BddDiscoveryBlock } from './bdd-discovery-block';

export const BehaviorDrivenPage: React.FC = () => {
    const { selectedTab, handleTabChange } = useTabsControl();

    const [isLinksBlockVisible, setLinksBlockVisiblity] = useState(false);

    const handleSecretKeySuccessfulType = useCallback(() => {
        setLinksBlockVisiblity(true);
    }, [setLinksBlockVisiblity]);

    useSecretCodeTyping('platformarulit', handleSecretKeySuccessfulType);

    return (
        <section>
            <Typography.Title tag="h1" dataTestId={ TestIds.PAGE_TITLE }>
                Behavior-Driven Development
            </Typography.Title>
            <TabsResponsive onChange={ handleTabChange } selectedId={ selectedTab }>
                <Tab title="Discovery" id="Discovery">
                    <BddDiscoveryBlock />
                </Tab>
                <Tab title="Formulation" id="Formulation">
                    <Typography.Title tag="h4">
                        Пример feature файла в cucumber
                    </Typography.Title>
                </Tab>
                <Tab title="Automation" id="Automation">
                    <BddAutomationBlock />
                </Tab>
            </TabsResponsive>
            { isLinksBlockVisible && (
                <LinksBlock
                    links={ bddLinks }
                    dataTestId={ TestIds.BDD_USEFUL_LINKS }
                />
            ) }
        </section>
    );
};
