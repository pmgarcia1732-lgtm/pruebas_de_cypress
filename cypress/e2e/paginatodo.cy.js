describe('template spec', () => {
  it('Comprobar que se pueden crear tareas', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('body').type("sacar el perro{enter}")
    
  })
  it('Comprobar que se marcan como hechas las tareas', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('body').type("comprar el pan{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
    
    
 })








})
