export const BASE_URL = 'http://localhost:8080';

export function getTestIdSelector(id: string) {
    return `[data-test-id=${id}]`;
}

export function triggerKeyDownOnPage(key: string) {
    cy.get('body').trigger('keydown', { key });
}
