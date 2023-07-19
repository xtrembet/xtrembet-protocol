import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades"
import "@@nomiclabs/hardhat-etherscan"
// import "dotenv/config";
// import "@nomiclabs/hardhat-etherscan";
// import "@nomiclabs/hardhat-solhint";
// import "@nomiclabs/hardhat-waffle";
// import "hardhat-deploy";
// import "hardhat-gas-reporter";
// import "hardhat-spdx-license-identifier";
// import "hardhat-typechain";
// import "hardhat-watcher";
// import "solidity-coverage";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
};

export default config;
