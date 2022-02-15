import { TradeRepository } from "../repositories/TradeRepository";
import { Trade } from "../model/Trade";

class ListTradeService{

  constructor(private tradeRepository: TradeRepository){}

  allTrades = this.tradeRepository.listAllTrades();

  sortFunction(a: Trade,b: Trade){  
    const dateA = new Date(a.created_at).getTime();
    const dateB = new Date(b.created_at).getTime();
    return dateA > dateB ? 1 : -1;  
  }
  
  listAllTrades(){

    return this.allTrades;
  }
  listRecentSpecificTrade(stockCode: string){

    if(this.allTrades){
      const recentTrade: Trade[] =  this.allTrades.filter(item => item.stockCode == stockCode);
      const values = recentTrade.sort(this.sortFunction);
      
      return values[0];
    }
  }

  listRecentTrades(){
    if(this.allTrades){
      const values = this.allTrades.sort(this.sortFunction);
      
      return values[0];
    }
  }

  listSpecificTrade(stockCode: string){
    if(this.allTrades){
      const recentTrade: Trade[] =  this.allTrades.filter(item => item.stockCode == stockCode);
      
      return recentTrade;
    }
  }

  listBiggerPrice(price: number){
    if(this.allTrades){
      const recentTrade: Trade[] =  this.allTrades.filter(item => item.price > price);
      
      return recentTrade;
    }
  }

  listBiggerPriceSpecificTrade(price: number, stockCode: string){
    if(this.allTrades){
      const recentTrade: Trade[] =  this.allTrades
      .filter(item => item.stockCode == stockCode)
      .filter(item => item.price > price);
      
      return recentTrade;
    }
  }

  listSmallerPrice(price: number){
    if(this.allTrades){
      const recentTrade: Trade[] =  this.allTrades.filter(item => item.price < price);
      
      return recentTrade;
    }
  }

  listSmallerPriceSpecificTrade(price: number, stockCode: string){
    if(this.allTrades){
      const recentTrade: Trade[] =  this.allTrades
      .filter(item => item.stockCode == stockCode)
      .filter(item => item.price < price);
      
      return recentTrade;
    }
  }

}

export { ListTradeService }