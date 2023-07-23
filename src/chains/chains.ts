import Chain from "src/chains/chainModel";

export const goerliChain: Chain = {
  id: "0x5",
  token: "gETH",
  label: "Görli",
  shortName: "gor",
  rpcUrl: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
  blockExplorerUrl: "https://goerli.etherscan.io",
  color: "#fbc02d",
  transactionServiceUrl: "https://safe-transaction-goerli.safe.global",
  isStripePaymentsEnabled: false,
};

export const gnosisChain: Chain = {
  id: "0x64",
  token: "xDai",
  shortName: "gno",
  label: "Gnosis Chain",
  rpcUrl: "https://rpc.gnosischain.com",
  blockExplorerUrl: "https://gnosisscan.io",
  color: "#3e6957",
  transactionServiceUrl: "https://safe-transaction-gnosis-chain.safe.global",
  isStripePaymentsEnabled: false,
};

export const polygonChain: Chain = {
  id: "0x89",
  token: "matic",
  shortName: "matic",
  label: "Polygon",
  rpcUrl: "https://polygon-rpc.com",
  blockExplorerUrl: "https://polygonscan.com",
  color: "#8248E5",
  transactionServiceUrl: "https://safe-transaction-polygon.safe.global",
  isStripePaymentsEnabled: false,
};

export const mumbaiChain: Chain = {
  id: "0x13881",
  token: "matic",
  shortName: "matic",
  label: "Mumbai",
  rpcUrl: "https://rpc-mumbai.maticvigil.com/",
  blockExplorerUrl: "https://mumbai.polygonscan.com",
  color: "#8248E5",
  isStripePaymentsEnabled: true,
  faucetUrl: "https://mumbaifaucet.com/",
};

const chains: Chain[] = [
    goerliChain,
  gnosisChain,
  mumbaiChain,
  polygonChain,
];

export const initialChain = mumbaiChain;

export default chains;