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
  it('Agregar una tarea a la lista', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('.new-todo').type("Tarea 1 {enter}")
    cy.get('.todo-list').contains("Tarea 1")

  })
  it('Marcar una tarea como completada', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('body').type("lavar el coche{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()

  })
  it('Desmarcar tarea completada', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('body').type("hacer la compra{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="todo-item-toggle"]').click()

  })
  it('Editar una tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('body').type("Sacar al perro{enter}")
    cy.get('[data-testid="todo-item-label"]').dblclick()
    cy.get('[data-testid="text-input"]').last().clear().type("sacar la basura")
 
  })
  it('Borrar tareas', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('body').type("ir al gimnasio{enter}") 
    cy.get('[data-testid="todo-item-toggle"]').check()
    cy.get('[data-testid="footer"] button.clear-completed').click()

  })
  it('filtrar tareas', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('body').type("Sacar al perro{enter}")
    cy.get('body').type("hacer la comida{enter}")
    cy.get('body').type("cortar el cesped{enter}")
    cy.get('li:nth-child(1) [data-testid="todo-item-toggle"]').check();
    cy.get('li:nth-child(2) [data-testid="todo-item-toggle"]').check();
    cy.get('[data-testid="footer-navigation"] a[href="#/completed"]').click();
  
 })







})
