import "styles/globals.css"
import { ThirdwebWeb3Provider } from "@3rdweb/hooks"
import { ETHEREUM_MAINNET_CHAIN_ID, GOERLI_CHAIN_ID } from "config"
import { PageLayout } from "layouts/PageLayout"
import type { AppProps } from "next/app"
import { Toaster } from "react-hot-toast"
import { networksMetadata } from "utils/constants"

const supportedChainIds = [ETHEREUM_MAINNET_CHAIN_ID, GOERLI_CHAIN_ID]
const connectors = {
  injected: {}
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThirdwebWeb3Provider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
      chainAddConfig={networksMetadata}
    >
      <Toaster position="bottom-center" toastOptions={{ duration: 3000 }} />
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
