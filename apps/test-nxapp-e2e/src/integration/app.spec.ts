import { getGreeting } from '../support/app.po';

describe('test-nxapp', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.get('[data-cy=button-toggle-popup]').as('buttonElement');
    cy.get('[data-cy=text-popup]').as('popupElement');
    cy.get('[data-cy=form]').as('form');
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

  it('should send form on submit', () => {
    cy.intercept('POST', '/api/new-user').as('postNewUser');

    cy.get('@form').find('input[name=username]').type('TestUsername');
    cy.get('@form').find('input[name=email]').type('test@e.mail');
    cy.get('@form').submit();

    cy.wait('@postNewUser').then(({ request }) => {
      // not sure if it's correct to test it like that
      expect(request.body).to.eq('username=TestUsername&email=test%40e.mail');
    });

    cy.visit('/');
  });
});
