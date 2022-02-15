import { v4 as uuidV4 } from 'uuid';

class Trade {
  stockCode: string;
  id?: string;
  created_at: Date;
  price: number;
  qtd: string;

  constructor(){
    if(!this.id){
      this.id = uuidV4();
    }
  }
}

export { Trade };