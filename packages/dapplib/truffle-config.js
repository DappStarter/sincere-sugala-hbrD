require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note soccer provide gesture glide equal giant'; 
let testAccounts = [
"0x86f68b60df8a7cf08c4589042e60961828b147ed03f33c73dbad6e1220eff2cc",
"0x6a36254ac25a84c1a53d47439a90074bba633feca78127c78006b27d04cf4ff7",
"0x12a0ad8f12f622294ce7b62ab8494e7a4dbeac5ca29fa59783513cd55e476334",
"0x1af7d6e7a1e20854f2d6a190f3c3277e93feb3d437a65b1d69c13a23b0070eb6",
"0x3f623bab54c1caad003a5c68d696e33a70ff23f0ddfcd178e9ee0cb62d4c8392",
"0x48fd7f074fa19fec53842813b1ca5fe4c5079c31ea48f4a7bd23d7e1eb3997e8",
"0x667c7231c8c670b6fd7574cfed779953a0513b8a5271b542a2b599f0f09a8796",
"0x90876bbdeb6e0b55e228f254974fd08772b2e28c94436270b9d1556ff25a375e",
"0xaf4617599b33fdebd4061a173f5461aa0b77891fbb2157e8d388c5941d043d6e",
"0x234a5b68f45636a3d7d624d550fa8e094696eddde52ede94e87f3901b4bb4b7d"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

