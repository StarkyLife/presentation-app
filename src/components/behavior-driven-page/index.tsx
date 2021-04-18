import React, { useCallback, useState } from 'react';
import { Tab, TabsResponsive } from '@alfalab/core-components/tabs';
import { Typography } from '@alfalab/core-components/typography';

import { useSecretCodeTyping } from '../../hooks/key-press-hooks';
import { useTabsControl } from '../../hooks/tabs-control';
import featureFileImgUrl from '../../talk-data/feature-file.png';
import { TestIds } from '../../test-ids';
import { Image } from '../ui/image';

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
            { !isLinksBlockVisible && (
                <TabsResponsive onChange={ handleTabChange } selectedId={ selectedTab }>
                    <Tab title="Discovery" id="Discovery">
                        <BddDiscoveryBlock />
                    </Tab>
                    <Tab title="Formulation" id="Formulation">
                        <div data-test-id={ TestIds.BDD_FORMULATION_BLOCK }>
                            <Typography.Title tag="h4">
                                Пример feature файла в cucumber
                            </Typography.Title>
                            <Image
                                url={ featureFileImgUrl }
                                altText="Feature file example"
                            />
                        </div>
                    </Tab>
                    <Tab title="Automation" id="Automation">
                        <BddAutomationBlock />
                    </Tab>
                </TabsResponsive>
            ) }
            { isLinksBlockVisible && (
                <Typography.Text view="primary-large" dataTestId={ TestIds.BDD_SECRET_BLOCK }>
                    Молодец :) Не поленился раскрыть этот блок.
                    Тут была полезная информация,
                    но она переехала на главную страницу, чтобы и у ленивых был доступ к ней.
                </Typography.Text>
            ) }
        </section>
    );
};
