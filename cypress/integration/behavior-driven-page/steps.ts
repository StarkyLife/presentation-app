import { defineParameterType, defineStep, Then } from 'cypress-cucumber-preprocessor/steps';

import { TestIds } from '../../../src/test-ids';
import { getTestIdSelector } from '../../utils';

const blockNameAndTestIdMap = {
    Discovery: TestIds.BDD_DISCOVERY_BLOCK,
    Formulation: TestIds.BDD_FORMULATION_BLOCK,
    Automation: TestIds.BDD_AUTOMATION_BLOCK,
};

defineParameterType({
    name: 'block',
    regexp: /Discovery|Formulation|Automation/,
    transformer: (block) => blockNameAndTestIdMap[block],
});

defineStep('пользователь открыл блок {string}', (blockName: string) => {
    cy.contains(blockName).click();
});

Then('появится информация про {block}', (block: string) => {
    cy.get(getTestIdSelector(block)).should('exist');
});
Then('появится информация с заголовком {string}', (title: string) => {
    cy.contains(title).should('exist');
});
