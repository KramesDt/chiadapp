const hre = require("hardhat");

async function main() {
  const chia = await hre.ethers.deployContract("Chia");

  await chia.waitForDeployment();

  console.log('contract successfully deployed: ' + chia.target );
  // console.log("deployed to: " `${chia.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
