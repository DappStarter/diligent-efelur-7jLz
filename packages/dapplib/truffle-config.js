require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remain proud grace glove frame gather'; 
let testAccounts = [
"0xb455692cf46c12caf3cff672bba559a5cffd6221d20bd5b7ef485282aa09ff0e",
"0xcd17420949a0736f2967479633e714bbab280a46d7cc34c3a8c21f3fd63f82a7",
"0x1cf14130421049573ffde6e0156a950f6a2b123f46f8cb92ed24e156a8e6acd5",
"0xba467cf5a6202feb8c3470b64edb4bb23374fe02ed32a578540301fee33d1e8b",
"0xf21ef7be16092af45f8371446c79de80ec6f2d42950935557d7b94529587ea56",
"0xd94f533bc2147306be32e54422cbecf040b0fbdd28c92a9d475225d1d2096d10",
"0x05eb83fbb35effb27fa255321c91fcbfcdbd3ce15f4e5ef2aa6be91493d4a5cb",
"0x85da5ecfc7ed627f584830f6d7965124626ff55bcd69e9b416f31693e2b6c59e",
"0xd4c72b0cac5ec8473957c416815a01ac6231eabdd7c833c9c1c43d0792b8d0f8",
"0x6385b5e6661d89b6e36e0bcfa5c31a190ff760f7a94edec02797c8c87a924b24"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

