export const moexTickerLast = async (ticker: string) => {
    const json = await fetch('https://iss.moex.com/iss/engines/stock/markets/shares/securities/' + ticker + '.json').then(res => res.json());
    return json.marketdata.data.filter((d: any) => {
        return ['TQBR', 'TQTF'].indexOf(d[1]) !== -1;
    })[0][24];
}