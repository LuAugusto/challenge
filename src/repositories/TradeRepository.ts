import { Trade } from "../model/Trade";

interface ICreateTradeDTO{
  stockCode: string,
  price: number,
}

class TradeRepository{
  private trades: Trade[];

  constructor(){
    this.trades = [];
  }

  create({stockCode, price}: ICreateTradeDTO): void{
    const tradeGenerate = new Trade();

    Object.assign(tradeGenerate, {
      stockCode,
      created_at: new Date(),
      price,
    });

    this.trades.push(tradeGenerate);
  }

  listAllTrades(): Trade[] {
    return this.trades;
  }
}

export {TradeRepository}