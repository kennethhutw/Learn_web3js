const Web3 = require('web3');
let ws = 'wss://mainnet.infura.io/ws/v3/18e1be4f10e54db293166be67f10a59f';

var web3 = new Web3(ws);

// web3.eth.subscribe('pendingTransactions',(error, txhash) =>{
//     console.log(txhash);
// })

web3.eth.subscribe('pendingTransactions', (error, txhash) => {
    if (!error) {
        web3.eth.getTransaction(txhash, (error, tx) => {
            if (tx != null) {
                //filter transaction >= 1 ether
                if (tx.value >= 1000000000000000000) {
                    console.log(txhash);
                    console.log(web3.utils.fromWei(tx.value, 'ether'), " ether");
                }
            }
        })

    }
    else {
        console.log(error);
    }
})