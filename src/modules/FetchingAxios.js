// ./nseapi/allstock.js
const { default: axios } = require('axios')
var { NseIndia } = require('stock-nse-india')
const nseindia = new NseIndia()
exports.getAllSymbols = () => { // Note the corrected function name here
    return nseindia.getAllStockSymbols()
}
exports.getEquityHistoricalData = () => {
    return nseindia.getEquityStockIndices('NIFTY50')
}


exports.equity = (symbol) => {
    return nseindia.getEquityDetails(symbol)
}


exports.intraday = (symbol) => {
    return nseindia.getEquityIntradayData(symbol, false)
}

exports.HistoricalData = (symbol, range) => {
    return nseindia.getEquityHistoricalData(symbol, range)
}

exports.marketstatus = () => {
    console.log(nseindia.getAllStockSymbols());
    return nseindia.getDataByEndpoint('/api/marketStatus')
}

exports.AllTheIndices = () => {
    return nseindia.getDataByEndpoint('/api/allIndices')
}

exports.topgainersandloosers =async (indexSymbol) => {
    const indexData = await nseindia.getEquityStockIndices(indexSymbol);
    const gainers = [];
    const losers = [];
    indexData.data.forEach((equityInfo) => {
        if (equityInfo.pChange > 0)
            gainers.push(equityInfo);
        else
            losers.push(equityInfo);
    });
    return {
        gainers: [...gainers].sort((a, b) => b.pChange - a.pChange),
        losers: [...losers].sort((a, b) => a.pChange - b.pChange)
    };
}

exports.mostactive = async (indexSymbol) => {
    const indexData = await nseindia.getEquityStockIndices(indexSymbol);
    return {
        byVolume: [...indexData.data].sort((a, b) => b.totalTradedVolume - a.totalTradedVolume),
        byValue: [...indexData.data].sort((a, b) => b.totalTradedValue - a.totalTradedValue)
    };
}