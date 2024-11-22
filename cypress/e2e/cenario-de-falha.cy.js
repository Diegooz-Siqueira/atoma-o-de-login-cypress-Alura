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

    //ERRO CADASTRO
    it('Teste Cadastro Erro', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get(selectorList.cadastrarButtonInicial).click();
      cy.get(selectorList.cadastroButton).click();
      cy.contains('É necessário informar um endereço de email').should('be.visible');
      cy.contains('Crie uma senha').should('be.visible');
      cy.contains('Repita a senha criada acima').should('be.visible');
    })

    //ERRO LOGIN
    beforeEach(()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get(selectorList.loginButton).click();
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login',{
          statusCode:400, }).as('stubPost')
        })

    it('Teste login Erro', () => {
        cy.get(selectorList.enterButton).click();
        cy.contains('É necessário informar um endereço de email').should('be.visible');
        cy.contains('Insira sua senha').should('be.visible');     
    })

    it('Deve falhar mesmo que os campos sejam preenchidos corretamente', ()=> {
      cy.login ('diegosiqueira@gmail.com', 'Senha123')
      cy.wait('@stubPost')
      cy.contains ('Falha no login. Consulte suas credenciais.').should('be.visible')
    })    
    
})