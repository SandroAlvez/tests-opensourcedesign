//File for useful functions

//Stores all of the current page links in an array
Cypress.Commands.add('linkExtractor', (currentPage) => {
    cy.visit(currentPage)
    const listOfLinks = []
    
    //Iterates through the links and saves on the listOfLinks array
    return cy.get('a').each(($el) => {
        const href = $el.prop('href')
        if (href) listOfLinks.push(href)
    })
    .then(() => {
            cy.log(`The total number of links is: ${listOfLinks.length}`)
            cy.log(listOfLinks)
            return cy.wrap(listOfLinks)
    })
})





// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })