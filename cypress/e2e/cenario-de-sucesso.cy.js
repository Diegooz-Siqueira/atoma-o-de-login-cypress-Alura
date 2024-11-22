describe('Testes Front End', () => {

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

  //CADASTRO
  it('Teste Cadastro Sucesso', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get(selectorList.cadastrarButtonInicial).click();
    cy.cadastro('Diego Santos','diegosiqueira003@gmail.com','Senha123', 'Senha123')
  })

  //LOGIN
  beforeEach (() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get(selectorList.loginButton).click(); 
  })

  it('Teste login Sucesso', () => {
    cy.login('diegosiqueira003@gmail.com', 'Senha123')
    cy.contains(' Veja os amigos disponíveis para adoção!').should('be.visible');
    
  })
})