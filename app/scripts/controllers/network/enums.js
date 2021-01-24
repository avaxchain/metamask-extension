export const AVALANCHE = 'avalanche'
export const RINKEBY = 'rinkeby'
export const KOVAN = 'kovan'
export const MAINNET = 'mainnet'
export const GOERLI = 'goerli'

export const MAINNET_NETWORK_ID = '1'
export const AVALANCHE_NETWORK_ID = '1'
export const RINKEBY_NETWORK_ID = '4'
export const GOERLI_NETWORK_ID = '5'
export const KOVAN_NETWORK_ID = '42'

export const MAINNET_CHAIN_ID = '0x1'
export const AVALANCHE_CHAIN_ID = '0xa86a'
export const RINKEBY_CHAIN_ID = '0x4'
export const GOERLI_CHAIN_ID = '0x5'
export const KOVAN_CHAIN_ID = '0x2a'

export const AVALANCHE_DISPLAY_NAME = 'Avalanche'
export const RINKEBY_DISPLAY_NAME = 'Rinkeby'
export const KOVAN_DISPLAY_NAME = 'Kovan'
export const MAINNET_DISPLAY_NAME = 'Ethereum Mainnet'
export const GOERLI_DISPLAY_NAME = 'Goerli'

export const INFURA_PROVIDER_TYPES = [AVALANCHE, RINKEBY, KOVAN, MAINNET, GOERLI]

export const NETWORK_TYPE_TO_ID_MAP = {
  [AVALANCHE]: { networkId: AVALANCHE_NETWORK_ID, chainId: AVALANCHE_CHAIN_ID },
  [RINKEBY]: { networkId: RINKEBY_NETWORK_ID, chainId: RINKEBY_CHAIN_ID },
  [KOVAN]: { networkId: KOVAN_NETWORK_ID, chainId: KOVAN_CHAIN_ID },
  [GOERLI]: { networkId: GOERLI_NETWORK_ID, chainId: GOERLI_CHAIN_ID },
  [MAINNET]: { networkId: MAINNET_NETWORK_ID, chainId: MAINNET_CHAIN_ID },
}

export const NETWORK_TO_NAME_MAP = {
  [AVALANCHE]: AVALANCHE_DISPLAY_NAME,
  [RINKEBY]: RINKEBY_DISPLAY_NAME,
  [KOVAN]: KOVAN_DISPLAY_NAME,
  [MAINNET]: MAINNET_DISPLAY_NAME,
  [GOERLI]: GOERLI_DISPLAY_NAME,

  [AVALANCHE_NETWORK_ID]: AVALANCHE_DISPLAY_NAME,
  [RINKEBY_NETWORK_ID]: RINKEBY_DISPLAY_NAME,
  [KOVAN_NETWORK_ID]: KOVAN_DISPLAY_NAME,
  [GOERLI_NETWORK_ID]: GOERLI_DISPLAY_NAME,
  [MAINNET_NETWORK_ID]: MAINNET_DISPLAY_NAME,

  [AVALANCHE_CHAIN_ID]: AVALANCHE_DISPLAY_NAME,
  [RINKEBY_CHAIN_ID]: RINKEBY_DISPLAY_NAME,
  [KOVAN_CHAIN_ID]: KOVAN_DISPLAY_NAME,
  [GOERLI_CHAIN_ID]: GOERLI_DISPLAY_NAME,
  [MAINNET_CHAIN_ID]: MAINNET_DISPLAY_NAME,
}

export const CHAIN_ID_TO_TYPE_MAP = Object.entries(
  NETWORK_TYPE_TO_ID_MAP,
).reduce((chainIdToTypeMap, [networkType, { chainId }]) => {
  chainIdToTypeMap[chainId] = networkType
  return chainIdToTypeMap
}, {})

export const CHAIN_ID_TO_NETWORK_ID_MAP = Object.values(
  NETWORK_TYPE_TO_ID_MAP,
).reduce((chainIdToNetworkIdMap, { chainId, networkId }) => {
  chainIdToNetworkIdMap[chainId] = networkId
  return chainIdToNetworkIdMap
}, {})
