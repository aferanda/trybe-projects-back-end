const sinon = require("sinon");
const { expect } = require("chai");

const DB = require("../../../models/connection.models");
const salesModels = require("../../../models/sales.models");

describe("SALES MODELS TESTS", () => {
  describe("Busca vendas no DB", () => {
    describe("Busca todos as vendas no DB", () => {
      before(async () => {
        const execute = [[]];
        sinon.stub(DB, "execute").resolves(execute);
      });

      after(async () => {
        DB.execute.restore();
      });

      describe("quando não existe vendas no DB", () => {
        it("retorna um array vazio", async () => {
          const response = await salesModels.getAll();
          expect(response).to.be.deep.equal([]);
        });
      });

      describe("quando existe vendas no DB", () => {
        const salesData = [
          {
            saleId: 1,
            date: "2022-02-24T15:17:45.000Z",
            productId: 1,
            quantity: 5,
          },
          {
            saleId: 1,
            date: "2022-02-24T15:17:45.000Z",
            productId: 2,
            quantity: 10,
          },
          {
            saleId: 2,
            date: "2022-02-24T15:17:45.000Z",
            productId: 3,
            quantity: 15,
          },
        ];

        before(() => {
          sinon.stub(salesModels, "getAll").resolves(salesData);
        });

        after(() => {
          salesModels.getAll.restore();
        });

        it("retorna todos os vendas do DB", async () => {
          const response = await salesModels.getAll();
          expect(response).to.be.deep.equal(salesData);
        });

        it("retorna um array", async () => {
          const response = await salesModels.getAll();
          expect(response).to.be.an("array");
        });

        it("o array não está vazio", async () => {
          const response = await salesModels.getAll();
          expect(response).to.be.not.empty;
        });

        it("tal array possui tamanho igual a 3", async () => {
          const item = await salesModels.getAll();
          expect(item).to.have.length(3);
        });
      });
    });

    describe("Busca apenas uma venda no DB por seu ID", () => {
      before(async () => {
        const execute = [[]];
        sinon.stub(DB, "execute").resolves(execute);
      });

      after(async () => {
        DB.execute.restore();
      });

      describe("quando não existe uma venda com o ID informado", () => {
        it("retorna um array vazio", async () => {
          const response = await salesModels.getById();
          expect(response).to.be.deep.equal([]);
        });
      });

      describe("quando existe vendas com o ID informado", () => {
        before(() => {
          sinon.stub(salesModels, "getById").resolves([
            {
              date: "2022-02-24T15:09:58.000Z",
              productId: 1,
              quantity: 5,
            },
            {
              date: "2022-02-24T15:09:58.000Z",
              productId: 2,
              quantity: 10,
            },
          ]);
        });

        after(() => {
          salesModels.getById.restore();
        });

        it("retorna um array", async () => {
          const response = await salesModels.getById(1);
          expect(response).to.be.an("array");
        });

        it("o array não está vazio", async () => {
          const response = await salesModels.getById(1);
          expect(response).to.be.not.empty;
        });

        it('tal array possui tamanho igual a 2', async () => {
          const item = await salesModels.getById(1);
          expect(item).to.have.length(2);
        });

        it('tal array possui 2 objetos com as propriedades: "date", "productId" e "quantity"', async () => {
          const item = await salesModels.getById(1);
          expect(item[0]).to.include.all.keys("date", "productId", "quantity");
          expect(item[1]).to.include.all.keys("date", "productId", "quantity");
        });
      });
    });
  });
});
