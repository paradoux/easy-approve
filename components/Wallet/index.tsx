import { useWeb3 } from "@3rdweb/hooks"
import { useEffect, useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import toast from "react-hot-toast"
import { BiWallet, BiWifiOff } from "react-icons/bi"
import Popup from "reactjs-popup"
import { middleStringTruncate } from "utils/middleStringTruncate"

export const Wallet = () => {
  const { connectWallet, address, error } = useWeb3()
  const [openNetworkModal, setOpenNetworkModal] = useState(false)

  useEffect(() => {
    if (error) {
      setOpenNetworkModal(true)
    }
  }, [error])

  if (error) {
    console.log(error)
    return (
      <Popup
        open={openNetworkModal}
        trigger={
          <button className="p-2 font-semibold text-black bg-white rounded-md">
            Network Error
          </button>
        }
        modal
        overlayStyle={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="flex flex-col p-4 bg-white rounded-md">
          <div className="flex flex-col items-center p-2">
            <div className="p-3 mb-2 bg-gray-200 rounded-full">
              <BiWifiOff />
            </div>
            <span>Network not accepted</span>
          </div>
          <span className="text-gray-600">
            Please ensure your wallet is connected to MainNet or Görli and try
            again.
          </span>
        </div>
      </Popup>
    )
  }

  if (!address) {
    return (
      <button
        className="p-2 bg-green-500 rounded-md"
        onClick={() => connectWallet("injected")}
      >
        <div className="flex justify-center gap-2">
          <span className="font-semibold text-black">Connect Wallet</span>
          <div className="flex items-center">
            <BiWallet color="black" />
          </div>
        </div>
      </button>
    )
  }

  return (
    <CopyToClipboard
      text={address}
      onCopy={() => toast.success("wallet copied")}
    >
      <button className="p-2 border-2 border-green-500 border-solid rounded-md bg-gradient-to-t from-green-900 via-green-800 to-green-900">
        <span className="font-semibold text-white">
          {middleStringTruncate(address, 6, 6)}
        </span>
      </button>
    </CopyToClipboard>
  )
}
