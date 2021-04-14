import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

import { TestIds } from '../../../src/test-ids';
import { getTestIdSelector, triggerKeyDownOnPage } from '../../utils';

Given('пользователь находится на этапе Иллюстрация', () => {
    triggerKeyDownOnPage('ArrowRight');
});

When('пользователь нажимает клавишу со стрелкой "Вправо"', () => {
    triggerKeyDownOnPage('ArrowRight');
});

Then('появляется текст с описанием проблемы разделения знания', () => {
    cy.get(getTestIdSelector(TestIds.PAIR_PAGE_PROBLEM_BLOCK))
        .should('exist');
});
Then('появляется картина с иллюстрацией процесса парного программирования', () => {
    cy.get(getTestIdSelector(TestIds.PAIR_PAGE_PICTURE_BLOCK))
        .should('exist');
});
Then('появляется список предложений для решения проблемы разделения знания', () => {
    cy.get(getTestIdSelector(TestIds.PAIR_PAGE_SUGGESTIONS_BLOCK))
        .should('exist');
});
