describe('User can see what my CV contents', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('#cv-tab').click()
  })

  it('displays my name and image', () => {
    cy.get('.title').should('contain', 'Christer Forsgren')
    cy.get('.image').should('exist')
  })

  it('diplays my job experience', () => {
    cy.get('.h3').should('contain', 'Job experience')
    cy.get('.description').should('contain', 'job1')
    cy.get('.description').should('contain', 'job2')
    cy.get('.description').should('contain', 'job3')
  })

  it('displays my education', () => {
    cy.get('.h3').should('contain', 'My education')
    cy.get('.decription'),should('contain', 'edu1')
  })
})