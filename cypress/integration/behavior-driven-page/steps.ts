import { defineStep, Then } from 'cypress-cucumber-preprocessor/steps';

defineStep('пользователь открыл блок {string}', (blockName: string) => {
    cy.contains(blockName).click();
});

Then('появится информация с заголовком {string}', (title) => {
    cy.contains(title).should('exist');
});
