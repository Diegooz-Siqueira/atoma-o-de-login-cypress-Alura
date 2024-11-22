describe('Api Adopet', ()=>{

   it('Mensagens da API',()=> {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/ae590355-d552-4445-80b3-b5d1b80f637e',
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
            
    })
})
})