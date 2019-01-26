let Web3 = require('web3');

let url_infura = 'https://mainnet.infura.io/v3/18e1be4f10e54db293166be67f10a59f';
let url_infura_ropsten = 'https://ropsten.infura.io/v3/18e1be4f10e54db293166be67f10a59f';
let url_ganache = 'http://127.0.0.1:7545';

let web3 = new Web3(url_ganache);

console.log(web3.eth.accounts.create());