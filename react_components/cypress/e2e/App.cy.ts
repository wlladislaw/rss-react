/// <reference types="cypress" />

describe('App', () => {
  it('should open app', () => {
    cy.visit('/');
    cy.get('input').should('have.value', 'people');
  });
  it('should change value in input', () => {
    cy.visit('/');
    cy.get('input').type('World').should('have.value', 'peopleWorld').type('{enter}');
    cy.get('.title_card').contains('World');
  });
  it('should render cards', () => {
    cy.visit('/');
    cy.get('.card').should('have.length', 100);
  });
  it('renders  on the server', () => {
    cy.request('/').its('body');
  });
  beforeEach(() => {
    cy.visit('/');
  });
  it('should close the modal when the close button is clicked', () => {
    cy.get('.card_image').click({ multiple: true, force: true });
    cy.get('.modal').should('be.visible');
    cy.get('.closeImg').click({ multiple: true, force: true });
    cy.get('.modal').should('not.exist');
  });

  it('should close the modal when clicking outside the modal', () => {
    cy.get('.card_image').click({ multiple: true, force: true });
    cy.get('.modal').should('be.visible');
    cy.get('body').click('topRight');
    cy.get('.modal').should('not.exist');
  });
  it('should not close the modal when clicking inside the modal', () => {
    cy.get('.card_image').click({ multiple: true, force: true });
    cy.get('.modal').should('be.visible');
    cy.get('.modal_content').click();
    cy.get('.modal').should('be.visible');
  });
});
