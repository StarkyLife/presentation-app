import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given('пользователь находится на главной странице', () => {
    cy.visit('http://localhost:8080');
});
When('пользователь наводит на {string}', (practiceName) => {
    cy.contains(practiceName).trigger('mouseover');
});
Then('пользователь видит {string} во всплывающей окошке', (description) => {
    cy.contains(description).should('exist');
});

When('пользователь нажимает на {string}', (practiceName) => {
    cy.contains(practiceName).click();
});
Then('открывается страница с заголовком {string}', (title) => {
    cy.contains(title).should('exist');
});
