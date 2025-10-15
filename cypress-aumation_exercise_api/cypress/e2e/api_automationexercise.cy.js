describe('Funcionalidades da API Automation Exercise', () => {

    // Teste 1 - Get All Products List
    it('Dado que quero obter a lista de todas produtos, Quando fizer uma requisição GET para a API, Então deve retornar 200 e a lista de produtos', () => {
    cy.request("GET", "https://automationexercise.com/api/productsList").then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an("object");
        expect(response.body.responseCode).to.equal(200);
        expect(response.body).to.have.property('products');
        expect(response.body.products).to.be.an('array');
        expect(response.body.products.length).to.be.greaterThan(0);
      })
  })

  // Teste 2 - POST To All Products List
    it('Dado que quero adicionar um novo produto, Quando fizer uma requisição POST para a API, Então deve retornar status 405 e mensagem de erro', () => {
    cy.request({
            method: "POST",
            url: "https://automationexercise.com/api/productsList",
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.be.an("object");
            expect(response.body.responseCode).to.equal(405);
            expect(response.body).to.have.property("message");
            expect(response.body.message).to.equal("The page you requested was not found.");
        })
    })

    // Teste 3 - Get All Brands List
    it('Dado que quero obter a lista de todas as marcas, Quando fizer uma requisição GET para a API, Então deve retornar 200 e a lista de marcas', () => {
    cy.request("GET", "https://automationexercise.com/api/brandsList").then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an("object");
        expect(response.body.responseCode).to.equal(200);
        expect(response.body).to.have.property('brands');
        expect(response.body.brands).to.be.an('array');
        expect(response.body.brands.length).to.be.greaterThan(0);
        })
    })

    // Teste 4 - POST To Search Product
    it('Dado que quero buscar um produto, Quando fizer uma requisição POST para a API com o nome do produto, Então deve retornar 200 e os detalhes do produto', () => {
    const requestBody = {
            search_product: "Top"
        };

        cy.request("POST", "https://fakestoreapi.com/products", requestBody).then((response) => {
            expect(response.status).to.equal(201);
            expect(response.body).to.be.an("object");
            expect(response.body.title).to.equal(requestBody.title);
            expect(response.body.price).to.equal(requestBody.price);
            expect(response.body.description).to.equal(requestBody.description);
            expect(response.body.category).to.equal(requestBody.category);
            expect(response.body).to.have.property("id");
        })
    })

    // Teste 5 - POST To Search Product Invalid
    it('Dado que quero buscar um produto sem parâmetro, Quando fizer uma requisição POST para a API com o produto sem produto, Então deve retornar 400 e mensagem de erro', () => {
    cy.request({
            method: "POST",
            url: "https://automationexercise.com/api/searchProduct",
            form: true,
            body: {}
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.be.an("object");
            expect(response.body).to.have.property("message");
            expect(response.body.message).to.equal("The search_product field is required.");
        })
    })

    // Teste 6: Post  - Post To Verify Login Valid
    it('Dado que quero verificar o login com credenciais válidas, Quando fizer uma requisição POST para a API com email e senha válidos, Então deve retornar 200 e detalhes do usuário', () => {
    const requestBody = {
            email: "adornosamaraadorno165@gmail.com",
            password: "123456"
        };
        cy.request("POST", "https://automationexercise.com/api/verifyLogin", requestBody).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.be.an("object");
            expect(response.body).to.have.property("message");
        })
    })

    // Teste 7: Post  - Post To Verify Login Invalid
    it('Dado que quero verificar o login com credenciais inválidas, Quando fizer uma requisição POST para a API com email e senha inválidos, Então deve retornar 404 e mensagem de erro', () => {
    const requestBody = {
            email: "adornosamara165@gmail.com",
            password: "1"
        };
        cy.request({
            method: "POST",
            url: "https://automationexercise.com/api/verifyLogin",
            body: requestBody,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.be.an("object");
            expect(response.body).to.have.property("message");
            expect(response.body.message).to.equal("User not found!");
        })
    })

    // Teste 8 - DELETE METHOD To Delete User Account
    it('Dado que quero deletar uma conta de usuário, Quando fizer uma requisição DELETE para a API com o ID do usuário, Então deve retornar 200 e mensagem de sucesso', () => {
        const requestBody = {
            email: "adornosamaraadorno165@gmail.com",
            password: "123456"
        };
         cy.request("DELETE", "https://automationexercise.com/api/verifyLogin", requestBody).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.be.an("object");
            expect(response.body).to.have.property("message");
            })
        })              

});