const sinon = require("sinon");
const { expect } = require("chai");

const DB = require("../../../models/connection.models");
const productsModels = require("../../../models/products.models");

describe("PRODUCTS MODELS TESTS", () => {
  before(() => {
    const modelsResponse = [[
      {
        id: 1,
        name: "Martelo de Thor",
        quantity: 10,
      },
      {
        id: 2,
        name: "Traje de encolhimento",
        quantity: 20,
      },
      {
        id: 3,
        name: "Escudo do Capitão América",
        quantity: 30,
      },
    ]];
    sinon.stub(DB, "execute").resolves(modelsResponse);
  });

  after(() => {
    DB.execute.restore();
  });

  describe("Busca produtos no DB", () => {
    describe("1 - Busca todos os produtos no DB", () => {
      describe("1.1 - quando existe produtos no DB", () => {
        it("retorna um array", async () => {
          const response = await productsModels.getAll();
          expect(response).to.be.an("array");
        });
        it("esse array tem 3 posições", async () => {
          const response = await productsModels.getAll();
          expect(response).to.have.length(3);
        });
      });
    });

    describe("2 - Busca apenas um produto no DB por seu ID", () => {
      describe("2.1 - quando existe um produto com o ID informado", () => {
        it("retorna um objeto", async () => {
          const [response] = await productsModels.getById(1);
          expect(response).to.be.an("object");
        });
        it("esse objeto tem as chaves id, name, quantity", async () => {
          const [response] = await productsModels.getById(1);
          expect(response).to.have.keys("id", "name", "quantity");
        });
      });
    });

    describe("3 - Busca um produto no DB pelo nome", () => {
      describe("3.1 - quando existe um produto com o nome informado", () => {
        it("retorna um objeto", async () => {
          const [response] = await productsModels.findByName("Martelo de Thor");
          expect(response).to.be.an("object");
        });
      });
    });
  });

  describe("Atualiza produtos no DB", () => {
    describe("1 - Insere produtos no DB", () => {
      describe("1.1 - quando cria um produto com o nome informado e quantidade", () => {
        it("deve ser uma função", async () => {
          expect(productsModels.create).to.be.a("function");
        });

        it("retorna um array", async () => {
          const response = await productsModels.create('Martelo de Thor', 10);
          expect(response).to.be.an("array");
        });

        it("esse array não está vazio", async () => {
          const response = await productsModels.create('Martelo de Thor', 10);
          expect(response).not.to.be.empty;
        });
      });
    });
    describe("2 - Atualiza produtos no DB pelo nome", () => {
      describe("2.1 - quando atualiza um produto com o nome informado", () => {
        it("retorna um array", async () => {
          const response = await productsModels.updateByName('Martelo de Thor', 10, 1);
          expect(response).to.be.an("array");
        });
      });
    });
    describe("3 - Atualiza quantidade dos produtos", () => {
      describe("3.1 - quando atualiza um produto com o id informado", () => {
        it("retorna um array", async () => {
          const response = await productsModels.updateById(10, 1);
          expect(response).to.be.an("array");
        });
      });
    });
    describe("4 - Deleta um produto do DB", () => {
      describe("4.1 - quando deleta um produto com o id informado", () => {
        it("retorna um array", async () => {
          const response = await productsModels.remove(1);
          expect(response).to.be.an("array");
        });
      });
    });
  });
});
