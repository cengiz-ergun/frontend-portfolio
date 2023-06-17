// http://localhost:3000
context("popup generator", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
        cy.viewport(1366, 768)
    })

    it(".click() - uploading images subsequently", () => {
        cy.get(".ut-hidden").selectFile("cypress/fixtures/reactjs-ar21.svg", {
            force: true,
        })
        cy.wait(12000)
        cy.get('img').then($elements => {
            const matchedElements = $elements.filter((index, element) => {
              const src = element.getAttribute('src');
              const regex = /(?:\w+\.)?reactjs-ar21\.svg/;
              return regex.test(src);
            });
            if(matchedElements.length == 0){
                throw new Error("first image didn't uploaded")
            }
          });
          cy.get(".ut-hidden").selectFile("cypress/fixtures/logo-javascript.svg", {
            force: true,
        })
        cy.wait(12000)
        cy.get('img').then($elements => {
            const matchedElements = $elements.filter((index, element) => {
              const src = element.getAttribute('src');
              const regex = /(?:\w+\.)?logo-javascript\.svg/;
              return regex.test(src);
            });
            if(matchedElements.length == 0){
                throw new Error("second image didn't uploaded")
            }
          });
    })
})
