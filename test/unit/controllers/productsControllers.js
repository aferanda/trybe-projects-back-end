const sinon = require("sinon");
const { expect } = require("chai");

const productsModels = require("../../../models/products.models");
const productsControllers = require("../../../controllers/products.controllers");

describe("PRODUCTS CONTROLLERS TESTS", () => {
  describe('Ao chamar o controller de "getAll"', () => {
    const modelsResponse = [
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

    const request = {};
    const response = {};

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(productsModels, "getAll").resolves(modelsResponse);
    });

    after(() => {
      productsModels.getAll.restore();
    });

    it('é chamado o método "status" com o código 200', async () => {
      await productsControllers.getAll(request, response);
      expect(response.status.calledWith(200)).to.be.true;
    });

    it('é chamado o método "json" passando um objeto', async () => {
      await productsControllers.getAll(request, response);
      expect(response.json.calledWith(sinon.match.array)).to.be.true;
    });
  });

  describe('Ao chamar o controller de "getById"', () => {
    describe("quando não existem produtos no DB", async () => {
      const request = {};
      const response = {};

      before(() => {
        request.params = { id: 4 };
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();

        sinon.stub(productsModels, "getById").resolves([]);
      });

      after(() => {
        productsModels.getById.restore();
      });

      it('é chamado o método "status" com o código 404', async () => {
        await productsControllers.getById(request, response);

        expect(response.status.calledWith(404)).to.be.true;
      });

      it('é chamado o método "json" com a mensagem "Product not found"', async () => {
        await productsControllers.getById(request, response);

        expect(response.json.calledWith({ message: "Product not found" })).to.be.true;
      });
    });

    describe("quando existem produtos no DB", async () => {
      const request = {};
      const response = {};

      before(() => {
        request.params = { id: 1 };
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();

        sinon.stub(productsModels, "getById").resolves([
          {
            id: 1,
            name: "Martelo de Thor",
            quantity: 10,
          },
        ]);
      });

      after(() => {
        productsModels.getById.restore();
      });

      it('é chamado o método "status" com o código 200', async () => {
        await productsControllers.getById(request, response);

        expect(response.status.calledWith(200)).to.be.true;
      });

      it('é chamado o método "json" passando um objeto', async () => {
        await productsControllers.getById(request, response);

        expect(response.json.calledWith(sinon.match.object)).to.be.true;
      });
    });
  });
});
