const RyoiiCoin = artifacts.require("RyoiiCoin");
const RyoiiNFT = artifacts.require("RyoiiNFT");
const ERC721 = artifacts.require("ERC721");
const ERC721URIStorage = artifacts.require("ERC721URIStorage");
const ERC721Burnable = artifacts.require("ERC721Burnable");
const Ownable = artifacts.require("Ownable");

module.exports = function(deployer) {
  deployer.deploy(RyoiiCoin);
  deployer.deploy(RyoiiNFT);
  deployer.link(RyoiiNFT, [ERC721, ERC721URIStorage, ERC721Burnable, Ownable]);
};
