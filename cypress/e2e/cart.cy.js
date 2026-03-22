describe('Cart Tests', () =>
     { beforeEach(() => {
cy.visit('https:/www.saucedemo.com/')

cy.get('#user-name').type('standard_user')
cy.get('#password').type('secret_sauce')
cy.get('#login-button').click()
})

it('should open cart page', () => {
cy.get('.shopping_cart_link').click()
cy.url().should('include', 'cart')
})
})