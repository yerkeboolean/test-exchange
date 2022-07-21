export interface CurrencyModel {
  all_currencies: any;
  baseCurrencies: any;
  baseCurrency: string;
  resultConvertion: {
    from?: string,
    to?: string,
    amount?: number,
    result?: number
  };
}

export interface CurrencyListItem extends Array<string> {
  0: string;
  1: string;
}
