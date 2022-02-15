import {CreateTradeService} from './CreateTradeService';
import { TradeRepository } from "../repositories/TradeRepository";

interface IRequest{
  stockCode: string,
  qtd: string
}


describe("Create Trade", () => {
  it("should be create a trade", () => {
    const tradeRepository = new TradeRepository();
    const createTradeService = new CreateTradeService(tradeRepository);

    const tradeData : IRequest = {
      stockCode: 'ALUP11',
      qtd: '2'
    }

    const trade = createTradeService.execute(tradeData);

    expect(trade).resolves;

  });
})