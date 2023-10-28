/*
 * The supported chains.
 * By default, there are only two chains here:
 *
 * - mudFoundry, the chain running on anvil that pnpm dev
 *   starts by default. It is similar to the viem anvil chain
 *   (see https://viem.sh/docs/clients/test.html), but with the
 *   basefee set to zero to avoid transaction fees.
 * - latticeTestnet, our public test network.
 *

 */

import {
  latticeTestnet,
  MUDChain,
  mudFoundry,
  baseGoerli,
} from "@latticexyz/common/chains";



baseGoerli.rpcUrls.default.http = [ 'https://base-goerli.g.alchemy.com/v2/dQowHy06IvvE954gG75A9UpPkjhXwp3a' ]
baseGoerli.rpcUrls.default.webSocket = [ 'wss://base-goerli.g.alchemy.com/v2/dQowHy06IvvE954gG75A9UpPkjhXwp3a' ]

/*
 * See https://mud.dev/tutorials/minimal/deploy#run-the-user-interface
 * for instructions on how to add networks.
 */
export const supportedChains: MUDChain[] = [mudFoundry, latticeTestnet, baseGoerli];
