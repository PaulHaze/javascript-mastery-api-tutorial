/* eslint-disable no-undef */
export const goToApp = () => {
  cy.visit('http://localhost:3000/');
};

export const getAppTitle = () => {
  cy.get('h2[data-test="heading"]').contains('Project');
};
