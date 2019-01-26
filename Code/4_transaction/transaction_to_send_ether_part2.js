const Tx = require('ethereumjs-tx');
let Web3 = require('web3');
let url_infura_ropsten = 'https://ropsten.infura.io/v3/18e1be4f10e54db293166be67f10a59f';

let web3 = new Web3(url_infura_ropsten);

const account1 = "0x87B021c43E0AB72f4d2519E3f47b95df9EF9f198";
const privateKey1 = Buffer.from('640deed505c1d273ae57d43f7bc106bb6879700a98bd0f0295344eb26c3138de','hex');
const account2 =  "0xD5707fA1D8f86FF28B3B895DE1dcf143D59488BD";

web3.eth.getTransactionCount(account1,(error,txCount)=>{
    // build a transaction object
    const txObject = {
        nonce:web3.utils.toHex(txCount),
        to: account2,
        value: web3.utils.toHex(web3.utils.toWei('0.3','ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10','gwei'))
    }

    const tx = new Tx(txObject);
    tx.sign(privateKey1);

    const serializedTx = tx.serialize();
    const raw = '0x'+ serializedTx.toString('hex');

    web3.eth.sendSignedTransaction(raw, (error, txHash)=>{
        console.log(txHash);
    })
});
