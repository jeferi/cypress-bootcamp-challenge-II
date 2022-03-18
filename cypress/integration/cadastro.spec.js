/// <reference types="cypress" />

let Chance = require('chance')
let chance = new Chance()

let firstname = chance.first()
let lastname = chance.last()

describe('Cadastro', () => {
    it('Quando teste', () => {


        cy.visit('http://automationpractice.com')

        cy.get('.login').click()
        cy.get('title').should('have.text','Login - My Store')

        cy.get('input#email_create').type(chance.email())
        cy.get('#SubmitCreate').click()

        cy.get('.page-heading').should('have.text','Create an account')
        cy.get('#id_gender1').check()
    
        cy.get('input#customer_firstname').type(firstname)
        cy.get('input#customer_lastname').type(lastname)
        cy.get('input#passwd').type('Agilizei@123')

        cy.get('#days').select('30')
        cy.get('#months').select('July')
        cy.get('#years').select('1988')

        cy.get('#optin').check()

        cy.get('input#address1').type(chance.address())
        cy.get('input#city').type(chance.city())
        cy.get('#id_state').select('Florida')
        cy.get('input#postcode').type(chance.zip())
        cy.get('input#phone_mobile').type(chance.phone())
    
        cy.get('#submitAccount > span').click() 

        cy.get('.account >').should('have.text', `${firstname} ${lastname}` )
        
    });
});

