async function main() {
  const initialSupply = ethers.utils.parseEther("1000");
  const DLKToken = await hre.ethers.getContractFactory("DLKToken");
  const token = await DLKToken.deploy(initialSupply);

  await token.deployed();

  console.log("Token deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
