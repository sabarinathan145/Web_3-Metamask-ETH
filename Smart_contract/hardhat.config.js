//https://eth-ropsten.alchemyapi.io/v2/bCswm9suQmCpBpUPCwopiEkssgrGCk1T

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url:'https://eth-ropsten.alchemyapi.io/v2/bCswm9suQmCpBpUPCwopiEkssgrGCk1T',
      accounts: ['03238a246bb04b8b7c53a88d6cf951020697eb06d7389a847262cfabcc92f536'],
    },
  },
};