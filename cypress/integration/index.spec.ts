it('basic test', () => {
  cy.visit('http://localhost:1234/')
    .get('[data-testid=clicked-count]')
    .should('have.text', 'You clicked 12 times')
})