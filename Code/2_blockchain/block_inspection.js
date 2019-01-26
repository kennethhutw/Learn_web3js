let Web3 = require('web3');

let url_infura = 'https://mainnet.infura.io/v3/18e1be4f10e54db293166be67f10a59f';
let url_infura_ropsten = 'https://ropsten.infura.io/v3/18e1be4f10e54db293166be67f10a59f';
let url_ganache = 'http://127.0.0.1:7545';

let web3 = new Web3(url_infura);

// web3.eth.getBlockNumber().then((result)=>{
//     console.log(result);
// });

// web3.eth.getBlock(7100581).then((block)=>{
//     console.log(block);
// })

//  web3.eth.getBlock('latest').then((block)=>{
//      console.log(block);
//  })

// web3.eth.getBlock('0x5387bfba1139d3902ca1d280cf96b8577d3d73d69e3186b5edab18a0d423a851').then((block)=>{
//     console.log(block.number);
// })

web3.eth.getTransactionFromBlock(7100592,2).then(console.log);