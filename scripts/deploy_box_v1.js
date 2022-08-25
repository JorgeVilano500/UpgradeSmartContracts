
const {ethers, upgrades} = require('hardhat')

async function main() {
    const Box = await ethers.getContractFactory('Box');

    const box = await upgrades.deployProxy(Box, [42], { // passing first the box contract itself, then the second parameter will have the value initialized by the initialize function and passing 42
        initializer: 'initialize'
    })

    await box.deployed(); 

    console.log('Box deployed to:', box.address)

}

main();
