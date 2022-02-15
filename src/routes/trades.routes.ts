import { Router } from "express";

import { TradeRepository } from "../repositories/TradeRepository";
import { CreateTradeService } from "../services/CreateTradeService";
import { ListTradeService } from "../services/ListTradeService";

const traderRoutes = Router();
const tradeRepository = new TradeRepository();

const listTradeService = new ListTradeService(tradeRepository);

traderRoutes.post("/:stockCode/:qtd", (request, response) => {
  const { stockCode, qtd} = request.params;
  
  const createTradeService = new CreateTradeService(tradeRepository);

  createTradeService.execute({stockCode, qtd});

  response.status(201).json({Success:'Success created!'});
});

traderRoutes.get("/allTrades", (request, response) => {
  const listTrades = listTradeService.listAllTrades();

  response.status(201).json({listTrades});
});

traderRoutes.get("/:stockCode", (request, response) => {
  const { stockCode} = request.params; 
  const listTrades = listTradeService.listRecentSpecificTrade(stockCode);

  response.status(201).json({listTrades});
});

traderRoutes.get("/allTrades/recentTrades", (request, response) => {
  const listTrades = listTradeService.listRecentTrades();

  response.status(201).json({listTrades});
});

traderRoutes.get("/specificTrade/:stockCode", (request, response) => {
  const { stockCode} = request.params;
  const listTrades = listTradeService.listSpecificTrade(stockCode);

  response.status(201).json({listTrades});
});

traderRoutes.get("/biggerPrice/:price", (request, response) => {
  const { price } = request.params;
  const listTrades = listTradeService.listBiggerPrice(Number(price));

  response.status(201).json({listTrades});
});

traderRoutes.get("/biggerPriceTrade/:price/:stockCode", (request, response) => {
  const { price, stockCode } = request.params;
  const listTrades = listTradeService.listBiggerPriceSpecificTrade(Number(price),stockCode);

  response.status(201).json({listTrades});
});

traderRoutes.get("/smallerPrice/:price", (request, response) => {
  const { price } = request.params;
  const listTrades = listTradeService.listSmallerPrice(Number(price));

  response.status(201).json({listTrades});
});

traderRoutes.get("/smallerPriceTrade/:price/:stockCode", (request, response) => {
  const { price, stockCode } = request.params;
  const listTrades = listTradeService.listSmallerPriceSpecificTrade(Number(price), stockCode);

  response.status(201).json({listTrades});
});

export {traderRoutes};