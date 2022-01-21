const fs = require('fs');

const RyoiiCoin = artifacts.require("RyoiiCoin");
const RyoiiNFT = artifacts.require("RyoiiNFT");
const ERC721 = artifacts.require("ERC721");
const ERC721URIStorage = artifacts.require("ERC721URIStorage");
const ERC721Burnable = artifacts.require("ERC721Burnable");
const Ownable = artifacts.require("Ownable");

module.exports = async function(deployer) {
  await deployer.deploy(RyoiiCoin);
  await deployer.deploy(RyoiiNFT);

  fs.writeFile('../truffle_data/contracts.json', JSON.stringify({
    ryc: RyoiiCoin.address,
    nft: RyoiiNFT.address,
  }), (err) => {
    if (err) {
      console.error(err);
    }
  });

  deployer.link(RyoiiNFT, [ERC721, ERC721URIStorage, ERC721Burnable, Ownable]);
};
