import { goToApp, getAppTitle } from './testingHelpers';

describe('Starter Template', () => {
  it('Visits home page and finds an h1 with "Template', () => {
    goToApp(); // cy.visit('http://localhost:3000/');
    getAppTitle(); // cy.get('h2[data-test="heading"]').contains('Project');
  });
});
