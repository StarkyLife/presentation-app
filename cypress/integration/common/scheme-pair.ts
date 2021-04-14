import { Given } from 'cypress-cucumber-preprocessor/steps';

import { BASE_URL } from '../../utils';

Given('пользователь находится на главной странице', () => {
    cy.visit(BASE_URL);
});
Given('пользователь находится на странице, посвященной парному программированию', () => {
    cy.visit(`${BASE_URL}/pair`);
});
