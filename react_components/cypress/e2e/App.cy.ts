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
});
