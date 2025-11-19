import { elements as el } from "./elements"

class GoalsPageTests {

    // Visit the page and confirm the elements

    // Go to the page
    visitPage() {
        cy.visit('https://opensourcedesign.net/goals/')
    }

    // Check the content
    goalsContentCheck() {
        
        // Assert url
        cy.url().should('include', '/goals')

        // Assert page title
        cy.get(el.h1).should('have.text', "Goals")
    }

}

export default new GoalsPageTests()