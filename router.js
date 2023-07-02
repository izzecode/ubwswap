const router = await kit._web3Contracts.getUniswapRouter();  // Get Router Contract
const twentyMinutesFromNow = Math.floor(Date.now() / 1000) + 60 * 20;  // Expiration time

const tx = await router.methods
  .addLiquidity(
    tokenA._address,
    tokenB._address,
    tokenA_amount,
    tokenB_amount,
    tokenA_minAmount,
    tokenB_minAmount,
    account.address,
    twentyMinutesFromNow
  )
  .send({ from: account.address });

console.log(`Transaction hash: ${tx.transactionHash}`);