describe('User can see what my CV contents', () => {
  beforeEach(() => {
    cy.visit('http://localhost3000')
    cy.get('#cv-tab').click()
  })

  it('displays my name and image', () => {
    cy.get('#cv-header').should('contain', 'Christer Forsgren')
    cy.get('.image').should('exist')
  })

  it('diplays my job experience and first job', () => {
    cy.get('#cv-1').within(() => {
      cy.get('.header').should('contain', 'Job Experience') 
      cy.get('.item').should('contain', 'job1')
      cy.get('.item').should('contain', 'I did blabla')
    })
  })

  it('diplays my secound job', () => {
    cy.get('#cv-2').within(() => {
      cy.get('.item').should('contain', 'job2')
      cy.get('.item').should('contain', 'I did blabla')
    })
  })

  it('diplays my third job', () => {
    cy.get('#cv-3').within(() => {
      cy.get('.item').should('contain', 'job3')
      cy.get('.item').should('contain', 'I did blabla')
    })
  })

  it('displays my education', () => {
    cy.get('#cv-4').within(() => {
      cy.get('.header').should('contain', 'Education')
      cy.get('.item').should('contain', 'Some school')
    })
  })
}) 