const {ethers, upgrades} = require('hardhat');

const PROXY = '0xAf45fC2AbEf464AD9FA94d310cb2d86276f09976';


async function main () {
    const BoxV2 = await ethers.getContractFactory('BoxV2');
    await upgrades.upgradeProxy(PROXY, BoxV2)
    console.log('Box Upgraded');
}

main();