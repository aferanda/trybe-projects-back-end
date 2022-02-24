const sinon = require("sinon");
const { expect } = require("chai");

const DB = require("../../../models/connection.models");
const salesModels = require("../../../models/sales.models");

describe("SALES MODELS TESTS", () => {
  describe("Lista todos as vendas", () => {
    const salesData =   [
      {
        "saleId": 1,
        "date": "2021-09-09T04:54:29.000Z",
        "productId": 1,
        "quantity": 2
      },
      {
        "saleId": 1,
        "date": "2021-09-09T04:54:54.000Z",
        "productId": 2,
        "quantity": 2
      }
    ];

    describe("Quando lista com sucesso", () => {
      before(() => {
        sinon.stub(DB, "execute").resolves(salesData);
      });

      after(() => {
        DB.execute.restore();
      });

      it("Retorna um array com as informações", async () => {
        const modelResponse = await salesModels.getAll();
        expect(modelResponse).to.be.deep.equal(salesData);
      });

      it("Retorna um array com as informações e o ID", async () => {
        const modelResponse = await salesModels.getById(1);
        expect(modelResponse).to.be.deep.equal(salesData);
      });
    });
  });
});


