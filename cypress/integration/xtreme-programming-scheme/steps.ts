import { Then, When } from 'cypress-cucumber-preprocessor/steps';

import { TestIds } from '../../../src/test-ids';
import { BASE_URL, getTestIdSelector } from '../../utils';

When('пользователь наводит на {string}', (practiceName) => {
    cy.contains(practiceName)
        .trigger('mouseover');
});
Then('во всплывающей окошке появляется {string}', (description) => {
    cy.contains(description)
        .should('exist');
});

When('пользователь нажимает на {string}', (practiceName) => {
    cy.contains(practiceName)
        .click();
});
Then('открывается страница с заголовком {string}', (title) => {
    cy.get(getTestIdSelector(TestIds.PAGE_TITLE))
        .should('contain', title);
});

When('он нажимает на текст с названием доклада', () => {
    cy.get(getTestIdSelector(TestIds.APP_NAME))
        .click();
});
Then('открывается главная страница', () => {
    cy.url()
        .should('eq', `${BASE_URL}/`);
});
