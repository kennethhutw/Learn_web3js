const Web3 = require('web3');
let ws = 'wss://mainnet.infura.io/ws/v3/18e1be4f10e54db293166be67f10a59f';

var web3 = new Web3(ws);

// web3.eth.subscribe('logs',{},(error, log)=>{
//     if(!error){
//         console.log(log);
//     }
// })


// web3.eth.subscribe('logs', {
//     address: '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d'
//   }, (error, log) => {
//     if(!error){
//       console.log(log)
//     }
//   })

web3.eth.subscribe('logs', {
  address: '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d',
  topics: ['0x241ea03ca20251805084d27d4440371c34a0b85ff108f6bb5611248f73818b80'],
  fromBlock: 'latest'
}, (error, log) => {
  if (!error) {
    console.log(log)
  }
})
//   Pregnant_event ="Pregnant(address,uint256,uint256,uint256)";
//   Pregnant_event_hashed = web3.utils.sha3(Pregnant_event);
//   console.log(Pregnant_event_hashed);
//   0x241ea03ca20251805084d27d4440371c34a0b85ff108f6bb5611248f73818b80