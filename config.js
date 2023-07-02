const Web3 = require('web3');
const { newKitFromWeb3 } = require('@celo/contractkit');

const

 web3 = new Web3('https://alfajores-forno.celo-testnet.org'); // Connect to Celo's Alfajores Testnet
const kit = newKitFromWeb3(web3);

// Configure your account (replace with your private key)
const accountPrivateKey = 'YOUR_PRIVATE_KEY';
const account = web3.eth.accounts.privateKeyToAccount(accountPrivateKey);
kit.connection.addAccount(account.privateKey);