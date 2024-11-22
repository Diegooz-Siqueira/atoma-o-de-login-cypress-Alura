const selectorList = {
    //Cadastro
    cadastrarButtonInicial: '[data-test="register-button"]',
    nameFieldCadastro: '[data-test="input-name"]',
    emailFieldCadastro: '[data-test="input-email"]',
    passwaordFieldCadastro: '[data-test="input-password"]',
    passwordConfirmCadastro:'[data-test="input-confirm-password"]',
    cadastroButton: '[data-test="submit-button"]',
    //Login
    loginButton: "[data-test='login-button']",
    emailField: 'input[name="email"]',
    passwaordField: 'input[name="password"]',
    enterButton: "[type='submit']"    
}

Cypress.Commands.add('login', (email, password) => { 
cy.get (selectorList.emailField).type(email);
cy.get (selectorList.passwaordField).type(password);
cy.get(selectorList.enterButton).click();
})

Cypress.Commands.add('cadastro', (nome, email, password, confirmPassoword) => { 
cy.get(selectorList.nameFieldCadastro).type(nome);
cy.get(selectorList.emailFieldCadastro).type(email);
cy.get(selectorList.passwaordFieldCadastro).type(password);
cy.get(selectorList.passwordConfirmCadastro).type(confirmPassoword);
cy.get(selectorList.cadastroButton).click();
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