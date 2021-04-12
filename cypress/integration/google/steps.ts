import { Then, When } from 'cypress-cucumber-preprocessor/steps';

When('user navigates to google', () => {
    cy.visit('https://google.com');
});

Then('google is opened', () => {
    cy.contains('Google')
        .should('exist');
});
