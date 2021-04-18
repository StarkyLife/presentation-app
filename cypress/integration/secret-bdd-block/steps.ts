import { Then, When } from 'cypress-cucumber-preprocessor/steps';

import { TestIds } from '../../../src/test-ids';
import { getTestIdSelector, triggerKeyDownOnPage } from '../../utils';

When('пользователь наберет на клавиатуре фразу {string}', (secret) => {
    for (let i = 0; i < secret.length; i++) {
        triggerKeyDownOnPage(secret[i]);
    }
});

Then('появится секретный блок', () => {
    cy.get(getTestIdSelector(TestIds.BDD_SECRET_BLOCK))
        .should('exist');
});
