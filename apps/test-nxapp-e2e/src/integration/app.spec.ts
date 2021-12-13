import { getGreeting } from '../support/app.po';

describe('test-nxapp', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy=button-toggle-popup]').as('buttonElement');
    cy.get('[data-cy=text-popup]').as('popupElement');
  });

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to test-nxapp!');
  });

  it("should show/hide 'text-popup' on 'toggle popup' button click", () => {
    cy.get('@buttonElement').should('exist');
    cy.get('@popupElement').should('not.be.visible'); // it's possible to use "should('have.css', 'opacity', '0')"

    cy.get('@buttonElement').click();
    cy.get('@popupElement').should('be.visible'); // it's possible to use "should('have.css', 'opacity', '1')"

    cy.get('@buttonElement').click();
    cy.get('@popupElement').should('not.be.visible');
  });
});
