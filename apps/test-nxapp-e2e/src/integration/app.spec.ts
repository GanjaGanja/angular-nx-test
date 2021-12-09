import { getGreeting } from '../support/app.po';

describe('test-nxapp', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to test-nxapp!');
  });

  it('should have \'toggle popup\' button', () => {
    cy.get('[data-cy=button-toggle-popup]').should('exist');
  });
});
