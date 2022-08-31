import { AddEthereumChainParameter } from "@3rdweb/hooks"
import { ETHEREUM_MAINNET_CHAIN_ID, GOERLI_CHAIN_ID } from "config"

interface t {
  [key: number]: AddEthereumChainParameter
}

export const networksMetadata: t = {
  [ETHEREUM_MAINNET_CHAIN_ID]: {
    chainId: "1",
    chainName: "Ethereum Mainnet",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: ["https://mainnet.infura.io/v3"],
    blockExplorerUrls: ["https://etherscan.io"]
  },
  [GOERLI_CHAIN_ID]: {
    chainId: "5",
    chainName: "Görli",
    nativeCurrency: {
      name: "Görli Ether",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: ["https://goerli.infura.io/v3"],
    blockExplorerUrls: ["https://goerli.etherscan.io"]
  }
}

export const networkMetadata = {}
