const friends = [
  "0x4Ea580c6AAA91c7Ed096f3dF14AFEEE76900E59F",
  "0xA425C8a9c421502b32153Ab795C210153aE11Aa5",
  "0x2c7D9E0e01d13f4a9313AEdbF98A9C570f5d2928",
  "0x7Fa1ee5AdAA1AEA9093B7b4fd57a5Db8230346Dc",
  "0x4F2dF8b4D24ef906D460383A61289CEf4E047df5",
  "0xbF86cD37c6b92D14Ea084711a026dB9e469673eE",
  "0x83cE74429510C1243E15207957fA3E004331e291",
  "0x364437a3705bD91736eF94257cCc680EF3BEC81b",
  "0x6368CD30cc23277CF1886841E138e864e11d1981",
  "0x7c8A0f7f04C28E8aFDBD7cde9903Ba413E883324",
];
const existingContractAddr = "0xF6dD1A94445c3b725b70F2D6fCCa56E6DE93CCB7";

async function main() {
  const token = await hre.ethers.getContractAt("VLZToken", existingContractAddr);

  for (let i = 0; i < friends.length; i++) {
    const amount = ethers.utils.parseEther("80");
    await token.transfer(friends[i], amount);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
