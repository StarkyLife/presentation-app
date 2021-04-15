import { defineStep, Then, When } from 'cypress-cucumber-preprocessor/steps';

import { TestIds } from '../../../src/test-ids';
import { getTestIdSelector, triggerKeyDownOnPage } from '../../utils';

defineStep('пользователь открыл блок {string}', (blockName: string) => {
    cy.contains(blockName).click();
});

When('пользователь наберет на клавиатуре фразу {string}', (secret) => {
    for (let i = 0; i < secret.length; i++) {
        triggerKeyDownOnPage(secret[i]);
    }
});

Then('появится информация с заголовком {string}', (title) => {
    cy.contains(title).should('exist');
});

Then('появится блок с полезными ссылками про BDD', () => {
    cy.get(getTestIdSelector(TestIds.BDD_USEFUL_LINKS))
        .should('exist');
});
