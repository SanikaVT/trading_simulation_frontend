export interface StockSymbol {
  _id: string;
  symbol: String;
  currency: String;
  isFavorite: Boolean;
  price: Number;
  previousClose: Number;
  open: Number;
  high: Number;
  low: Number;
}
