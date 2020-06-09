const HDWalletProvider = require("@truffle/hdwallet-provider");

const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    testnet: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          "https://public-node.testnet.rsk.co/2.0.1/"
        ),
      network_id: 31,
      gasPrice: 0x387ee40,
      networkCheckTimeout: 1000000000,
    },
  },
  compilers: {
    solc: {
      version: "0.5.2",
    },
  },
};
