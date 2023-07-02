const tx = await router.methods
  .swapExactTokensForTokens(
    tokenInAmount,
    tokenOutMinAmount,
    [tokenInAddress, tokenOutAddress],
    account.address,
    twentyMinutesFromNow
  )
  .send({ from: account.address });

console.log(`Transaction hash: ${tx.transactionHash}`);