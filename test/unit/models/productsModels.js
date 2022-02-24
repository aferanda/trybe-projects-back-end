const sinon = require("sinon");
const { expect } = require("chai");

const DB = require("../../../models/connection.models");
const productsModels = require("../../../models/products.models");

describe("PRODUCTS MODELS TESTS", () => {
  describe("Busca produtos no DB", () => {
    describe("Busca todos os produtos no DB", () => {
      before(async () => {
        const execute = [[]];
        sinon.stub(DB, "execute").resolves(execute);
      });

      after(async () => {
        DB.execute.restore();
      });

      describe("quando não existe produtos no DB", () => {
        it("retorna um array vazio", async () => {
          const response = await productsModels.getAll();
          expect(response).to.be.empty;
        });
      });

      describe("quando existe produtos no DB", () => {
        const productsData = [
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
        ];

        before(() => {
          sinon.stub(productsModels, "getAll").resolves(productsData);
        });

        after(() => {
          productsModels.getAll.restore();
        });

        it("retorna todos os produtos do DB", async () => {
          const response = await productsModels.getAll();
          expect(response).to.be.deep.equal(productsData);
        });

        it("retorna um array", async () => {
          const response = await productsModels.getAll();
          expect(response).to.be.an("array");
        });

        it("o array não está vazio", async () => {
          const response = await productsModels.getAll();
          expect(response).to.be.not.empty;
        });

        it("tal array possui tamanho igual a 3", async () => {
          const item = await productsModels.getAll();
          expect(item).to.have.length(3);
        });
      });
    });

    describe("Busca apenas um produto no DB por seu ID", () => {
      before(async () => {
        const execute = [[]];
        sinon.stub(DB, "execute").resolves(execute);
      });

      after(async () => {
        DB.execute.restore();
      });

      describe("quando não existe um produto com o ID informado", () => {
        it("retorna um array vazio", async () => {
          const response = await productsModels.getById();
          expect(response).to.be.deep.equal([]);
        });
      });

      describe("quando existe um produto com o ID informado", () => {
        before(() => {
          sinon.stub(productsModels, "getById").resolves({
            id: 1,
            name: "Martelo de Thor",
            quantity: 10,
          });
        });

        after(() => {
          productsModels.getById.restore();
        });

        it("retorna um objeto", async () => {
          const response = await productsModels.getById(1);
          expect(response).to.be.an("object");
        });

        it("o objeto não está vazio", async () => {
          const response = await productsModels.getById(1);
          expect(response).to.be.not.empty;
        });

        it('tal objeto possui as propriedades: "id", "name" e "quantity"', async () => {
          const item = await productsModels.getById(1);
          expect(item).to.include.all.keys("id", "name", "quantity");
        });
      });
    });
  });
});
