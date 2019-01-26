
let Web3 = require('web3');
let url_infura_ropsten = 'https://ropsten.infura.io/v3/18e1be4f10e54db293166be67f10a59f';

let web3 = new Web3(url_infura_ropsten);

// { address: '0x87B021c43E0AB72f4d2519E3f47b95df9EF9f198',
//   privateKey:
//    '0x640deed505c1d273ae57d43f7bc106bb6879700a98bd0f0295344eb26c3138de',
//   signTransaction: [Function: signTransaction],
//   sign: [Function: sign],
//   encrypt: [Function: encrypt] }
// { address: '0xD5707fA1D8f86FF28B3B895DE1dcf143D59488BD',
//   privateKey:
//    '0x7c225c0fbb2a07937523227fa60e9a903ba842ff1f74eb029db55c9547b70819',
//   signTransaction: [Function: signTransaction],
//   sign: [Function: sign],
//   encrypt: [Function: encrypt] }

const account1 = "0x87B021c43E0AB72f4d2519E3f47b95df9EF9f198";
const privateKey1 = Buffer.from('0x640deed505c1d273ae57d43f7bc106bb6879700a98bd0f0295344eb26c3138de');
const account2 =  "0xD5707fA1D8f86FF28B3B895DE1dcf143D59488BD";

web3.eth.getBalance(account1,(error,balance)=>{
    console.log("account 1 balance ", balance);
})

web3.eth.getBalance(account2,(error,balance)=>{
    console.log("account 2 balance ", balance);
})