const sinon = require("sinon");
const { expect } = require("chai");

const salesModels = require("../../../models/sales.models");
const salesControllers = require("../../../controllers/sales.controllers");

describe("SALES CONTROLLERS TESTS", () => {
  describe('Ao chamar o controller de "getAll"', () => {
    const modelsResponse = [
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
    ];

    const request = {};
    const response = {};

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(salesModels, "getAll").resolves(modelsResponse);
    });

    after(() => {
      salesModels.getAll.restore();
    });

    it('é chamado o método "status" com o código 200', async () => {
      await salesControllers.getAll(request, response);
      expect(response.status.calledWith(200)).to.be.true;
    });

    it('é chamado o método "json" passando um objeto', async () => {
      await salesControllers.getAll(request, response);
      expect(response.json.calledWith(sinon.match.array)).to.be.true;
    });
  });

  describe('Ao chamar o controller de "getById"', () => {
    describe("quando não existem vendas no DB", async () => {
      const request = {};
      const response = {};

      before(() => {
        request.params = { id: 4 };
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();

        sinon.stub(salesModels, "getById").resolves([]);
      });

      after(() => {
        salesModels.getById.restore();
      });

      it('é chamado o método "status" com o código 404', async () => {
        await salesControllers.getById(request, response);

        expect(response.status.calledWith(404)).to.be.true;
      });

      it('é chamado o método "json" com a mensagem "Sale not found"', async () => {
        await salesControllers.getById(request, response);

        expect(response.json.calledWith({ message: "Sale not found" })).to.be.true;
      });
    });

    describe("quando existem vendas no DB", async () => {
      const request = {};
      const response = {};

      before(() => {
        request.params = { id: 1 };
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();

        sinon.stub(salesModels, "getById").resolves([
          {
            date: "2022-02-24T17:06:40.000Z",
            productId: 1,
            quantity: 5,
          },
          {
            date: "2022-02-24T17:06:40.000Z",
            productId: 2,
            quantity: 10,
          },
        ]);
      });

      after(() => {
        salesModels.getById.restore();
      });

      it('é chamado o método "status" com o código 200', async () => {
        await salesControllers.getById(request, response);

        expect(response.status.calledWith(200)).to.be.true;
      });

      it('é chamado o método "json" passando um objeto', async () => {
        await salesControllers.getById(request, response);

        expect(response.json.calledWith(sinon.match.array)).to.be.true;
      });
    });
  });
});
