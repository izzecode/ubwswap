const Web3 = require('web3');
const web3 = new Web3('https://alfajores-forno.celo-testnet.org');
const account = web3.eth.accounts.create();
web3.eth.accounts.wallet.add(account);

const fs = require('fs');
const abi = fs.readFileSync('output/Flashloan.abi').toString();
const bytecode = fs.readFileSync('output/Flashloan.bin').toString();

const flashloan = new web3.eth.Contract(JSON.parse(abi));
flashloan.deploy({
    data: bytecode
}).send({
    from: account.address,
    gas: 1500000
}).then(function(newContractInstance){
    console.log(newContractInstance.options.address)
});

flashloan.methods.executeFlashloan(amount).send({
    from: account.address,
    gas: 1500000
}).then(console.log);