# KoinDX Support NFT Contract
This repo contains the contract of the KoinDX support NFT which can be minted on February 26th at 9PM UTC.

The contract is based on the current KCS-2 standard.


## Build
```sh
# build the debug version
yarn build:debug
# or
yarn exec koinos-sdk-as-cli build-all debug 0 colections.proto 

# build the release version
yarn build:release
# or
yarn exec koinos-sdk-as-cli build-all release 0 colections.proto 
```

## Test
```sh
yarn test
# or
yarn exec koinos-sdk-as-cli run-tests
```
