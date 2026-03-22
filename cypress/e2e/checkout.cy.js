describe('Checkout Flow', function () { it('should complete order successfully', function () {
cy.visit('https://www.saucedemo.com/')

cy.get('#user-name').type('standard_user')

cy.get('#password').type('secret_sauce')
cy.get('#login-button').click()

    cy.get('.btn_inventory').first().click()
    cy.get('.shopping_cart_link').click()

    cy.get('#checkout').click()

    cy.get('#first-name').type('Mario')
    cy.get('#last-name').type('Mladenov')
    cy.get('#postal-code').type('1000')

    cy.get('#continue').click()
    cy.get('#finish').click()

    cy.get('.complete-header').should('contain', 'Thank you')
})
})
