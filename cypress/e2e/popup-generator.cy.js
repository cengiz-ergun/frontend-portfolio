// http://localhost:3000
context("popup generator", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
        cy.viewport(1366, 768)

    })

    // it('.click() - click first pagination element', () => {
    //     cy.get('[data-test-id="pagination-item-1"]').click({force: true})
    // })

    it('.click() - two times image uploading subsequently', () => {
        // cy.get('[data-test-id="click-for-upload"]').click({force: true})
        // cy.get('[data-test-id="click-for-upload"]').selectFile('cypress/fixtures/reactjs-ar21.svg')
    })
})
