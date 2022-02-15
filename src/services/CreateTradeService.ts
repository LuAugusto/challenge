import { TradeRepository } from "../repositories/TradeRepository";

interface IRequest{
  stockCode: string,
  qtd: string
}

class CreateTradeService{

  constructor(private tradeRepository: TradeRepository){}

  generatePrice(min: number, max: number){
    const price = Number((Math.random() * (max - min) + min).toFixed(2));

    return price;
  }

  execute({stockCode, qtd}: IRequest){
    const quantity = Number(qtd);

    for(let x = 0; x < quantity; x++){
      const price = this.generatePrice(1, 100);
      try{
        this.tradeRepository.create({stockCode, price});
      }catch(err){
        throw new Error('Create error');
      }
    }
  }
}

export { CreateTradeService }