const sinon = require("sinon");
const { expect } = require("chai");

const DB = require("../../../models/connection.models");
const salesModels = require("../../../models/sales.models");

describe("SALES MODELS TESTS", () => {
  before(() => {
    const modelsResponse = [[
      {
        saleId: 1,
        date: "2022-02-24T17:06:40.000Z",
        productId: 1,
        quantity: 5,
      },
      {
        saleId: 1,
        date: "2022-02-24T17:06:40.000Z",
        productId: 2,
        quantity: 10,
      },
      {
        saleId: 2,
        date: "2022-02-24T17:06:40.000Z",
        productId: 3,
        quantity: 15,
      },
    ]];
    sinon.stub(DB, "execute").resolves(modelsResponse);
  });

  after(() => {
    DB.execute.restore();
  });

  describe("Busca vendas no DB", () => {
    describe("1 - Busca todos as vendas no DB", () => {
      describe("1.1 - quando existe vendas no DB", () => {
        it("retorna um array", async () => {
          const response = await salesModels.getAll();
          expect(response).to.be.an("array");
        });
        it("esse array tem 3 posições", async () => {
          const response = await salesModels.getAll();
          expect(response).to.have.length(3);
        });
      });
    });

    describe("2 - Busca apenas uma venda no DB por seu ID", () => {
      describe("2.1 - quando existe uma venda com o ID informado", () => {
        it("retorna um array", async () => {
          const response = await salesModels.getById(1);
          expect(response).to.be.an("array");
        });
      });
    });
  });

  describe("Atualiza vendas no DB", () => {
    describe("1 - Cria uma venda no DB", () => {
      describe("1.1 - quando cria uma venda com o produto e quantidades informados", () => {
        it("retorna undefined", async () => {
          const response = await salesModels.createSaleId();
          expect(response).to.be.a("undefined");
        });

        it("retorna um array", async () => {
          const response = await salesModels.createSalesProducts(4, 1, 10);
          expect(response).to.be.an("array");
        });
      });
    });
    describe("2 - Atualiza uma venda no DB", () => {
      describe("2.1 - quando atualiza uma venda", () => {
        it("retorna um array", async () => {
          const response = await salesModels.update(1, 10, 1);
          expect(response).to.be.an("array");
        });
      });
    });
    describe("3 - Deleta uma venda do DB", () => {
      describe("3.1 - quando deleta uma venda com o id informado", () => {
        it("retorna um array", async () => {
          const response = await salesModels.remove(1);
          expect(response).to.be.an("array");
        });
      });
    });
  });
});
