//Functional tests to validate the Home page links

describe('Links validation', () => {

    
    it('Access and validates all of the home page links', () => {

        //Returns an array with all the current page links
        cy.linkExtractor('https://opensourcedesign.net/').then((links) => {
            cy.log(`Total links found in the current page: ${links.length}`)
        
            // Iterates on each link
            cy.wrap(links).each((link) => {
            // Filter invalid links
                if (link.startsWith('http')) {
                    cy.request({
                    url: link,
                    failOnStatusCode: false, // avoiding automatic 404
                    }).then((response) => {
                        if (response.status >= 400) {
                            cy.log(`Broken link: ${link} (Status: ${response.status})`)
                        } else {
                            cy.log(`Working link: ${link}`)
                        }
                    })
                }
            })
        })
    })
})

