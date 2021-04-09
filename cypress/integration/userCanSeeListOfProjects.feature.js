describe('User can see list of projects', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('#projects-tab').click()
  })

  it('displays the first project', () => {
    cy.get('#project-1').within(() => {
      cy.get('.image').should('exist')
      cy.get('.header').should('contain', 'My First Website')
      cy.get('.description').should('contain', 'This was my first project.')
    })
  })

  it('displays the second project', () => {
    cy.get('#project-2').within(() => {
      cy.get('.image').should('exist')
      cy.get('.header').should('contain', 'The Adress Book Challange')
      cy.get('.description').should('contain', 'Made an adress book using HTML, JavaScript and CSS.')
    })
  })

  it('displays the third project', () => {
    cy.get('#project-3').within(() => {
      cy.get('.image').should('exist')
      cy.get('.header').should('contain', 'ATM Challange')
      cy.get('.description').should('contain', 'Built an ATM simulator using Ruby.')
    })
  })
})