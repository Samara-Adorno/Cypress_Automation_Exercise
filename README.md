## 🧾 Projeto de Testes Automatizados com Cypress - API Automation Exercise

Este projeto tem como objetivo aplicar **testes automatizados de API** utilizando o **Cypress** com abordagem **BDD (Behavior-Driven Development)**, simulando interações com a [API Automation Exercise](https://automationexercise.com/api_list ).

Os testes estão organizados por funcionalidades e seguem a estrutura **Gherkin** (`Dado`, `Quando`, `Então`) nos testes.

---

## 🧪 Casos de Teste

| Endpint | Método | Resultado Esperado |
| :--- | :--- | :--- |
| ✅ Caso 1 – Get All Products List | GET | Status 200 e lista de produtos |
| ❌ Caso 2 – POST To All Products List | POST | Status 405 e mensagem de erro |
| ✅ Caso 3 – Get All Brands List | GET | Status 200 e lista de marcas |
| ✅ Caso 4 – POST To Search Product | POST| Produto válido e status 200 |
| ❌ Caso 5 – POST To Search Product Invalid | POST| Status 400 e mensagem de erro |
| ✅ Caso 6 – Post To Verify Login Valid | POST | Status 200 e dados válidos |
| ❌ Caso 7 -  Post To Verify Login Invalid | POST | Status 404 e mensagem de erro |
| ✅ Caso 8 - METHOD To Delete User Account | DELETE | Status 200 e mensagem de sucesso |

---

### Tecnologias utilizadas

* [Cypress](https://www.cypress.io/) (versão 15 ou superior recomendada)
* Node.js (versão 20+)
* Automation Exercise API ([https://fakestoreapi.com](https://automationexercise.com/api_list))

---

▶  Como Executar o Projeto
1. Clone o repositório:

   ```bash
   git clone https://github.com/Samara-Adorno/Cypress_Automation_Exercise.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute os testes:

   * Modo interativo:

     ```bash
     npx cypress open
     ```
   * Modo headless (terminal):

     ```bash
     npx cypress run
     ```

---

### Discentes

| Nome do Discente | RA        |
| ---------------- | --------- |
| Samara Adorno     | 2001639 |

---

### Matéria

**Teste e Qualidade de Software - Profª Michele**
