import { getGreeting } from '../support/app.po';

describe('test-nxapp', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to test-nxapp!');
  });

  it('should show/hide \'text-popup\' with animation effects on \'toggle popup\' button click', () => {
    cy.get('[data-cy=button-toggle-popup]').should('exist');
    cy.get('[data-cy=text-popup]').should('not.be.visible');
    cy.get('[data-cy=text-popup]').should('have.css', 'opacity', '0'); // this line could be removed

    cy.get('[data-cy=button-toggle-popup]').click()
      .then(() => {
        cy.get('[data-cy=text-popup]').should('have.css', 'opacity', '1'); // this line could be removed
        cy.get('[data-cy=text-popup]').should('be.visible');
      })
      .then(() => {
        cy.get('[data-cy=button-toggle-popup]').click()
          .then(() => {
            cy.get('[data-cy=text-popup]').should('have.css', 'opacity', '0'); // this line could be removed
            cy.get('[data-cy=text-popup]').should('not.be.visible');
          })
      });
  });
});
