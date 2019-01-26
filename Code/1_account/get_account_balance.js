let Web3 = require('web3');

let url_infura = 'https://mainnet.infura.io/v3/18e1be4f10e54db293166be67f10a59f';
let url_infura_ropsten = 'https://ropsten.infura.io/v3/18e1be4f10e54db293166be67f10a59f';
let url_ganache = 'http://127.0.0.1:7545';

let web3 = new Web3(url_ganache);

let address = '0xbe06Cd7dC23325287439516cA2D1aD98eC4c2419';

web3.eth.getBalance(address, function(error, balance){
    if(error){
        console.log(error);
    }
    else{
        console.log(web3.utils.fromWei(balance,'ether'));
    }
})
