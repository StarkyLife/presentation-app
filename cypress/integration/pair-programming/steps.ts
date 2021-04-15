import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

import { TestIds } from '../../../src/test-ids';
import { getTestIdSelector, triggerKeyDownOnPage } from '../../utils';

Given('пользователь находится на этапе Иллюстрация', () => {
    triggerKeyDownOnPage('ArrowRight');
});

Then('(появляется )картина с иллюстрацией процесса парного программирования( остается)', () => {
    cy.get(getTestIdSelector(TestIds.PAIR_PAGE_PICTURE_BLOCK))
        .should('exist');
});
Then('(появляется )описание плюсов и минусов( остается)', () => {
    cy.get(getTestIdSelector(TestIds.PAIR_PAGE_PROS_CONS_BLOCK))
        .should('exist');
});
Then('появляется список предложений для решения проблемы разделения знания', () => {
    cy.get(getTestIdSelector(TestIds.PAIR_PAGE_SUGGESTIONS_BLOCK))
        .should('exist');
});
