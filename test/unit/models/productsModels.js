const sinon = require("sinon");
const { expect } = require("chai");

const DB = require("../../../models/connection.models");
const productsModels = require("../../../models/products.models");

describe("PRODUCTS MODELS TESTS", () => {
  describe("Lista todos os produtos", () => {
    const productsData = [
      {
        id: 1,
        name: "produto A",
        quantity: 10,
      },
      {
        id: 2,
        name: "produto B",
        quantity: 20,
      },
      {
        id: 3,
        name: "produto B",
        quantity: 20,
      },
    ];

    describe("Quando lista com sucesso", () => {
      before(() => {
        sinon.stub(DB, "execute").resolves(productsData);
      });

      after(() => {
        DB.execute.restore();
      });

      it("Retorna um objeto com todos os produtos", async () => {
        const modelResponse = await productsModels.getAll();
        expect(modelResponse).to.be.deep.equal(productsData);
      });

      it("Retorna um objeto com as informações do produto buscado pelo ID", async () => {
        const modelResponse = await productsModels.getById(2);
        expect(modelResponse).to.be.deep.equal(productsData);
      });
    });
  });
});


