import { sideAnimationRightVariants } from "animations"
import { ContractCard } from "components/ContractCard"
import { TransactionCard } from "components/TransactionCard"
import { BANK_ADDRESS } from "config"
import { ToolsSection } from "content/ToolsSection"
import { ethers } from "ethers"
import { motion } from "framer-motion"
import { useBank } from "hooks/useBank"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRef } from "react"
import { BsArrowUpRight } from "react-icons/bs"
import { middleStringTruncate } from "utils/middleStringTruncate"

enum OperationType {
  Deposit,
  Withdraw
}

const Home: NextPage = () => {
  const contractCardRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const { lastTransfers, deposityMoneyMutation, withdrawMoneyMutation, bankBalance, customerBalance } = useBank()

  const focusContractCard = () => {
    if (contractCardRef.current) {
      contractCardRef.current.style.transform = "scale(1.05)"
      contractCardRef.current.style.transition = "transform 0.6s ease-in-out"
      contractCardRef.current.style.transition = "border 0.3s ease-in-out"
      contractCardRef.current.style.border = "2px solid #fff"

      setTimeout(() => {
        const borderNeutral600 = "#525252"
        contractCardRef.current.style.transform = "scale(1)"
        contractCardRef.current.style.border = `1px solid ${borderNeutral600}`
      }, 300)
    }
  }

  return (
    <>
      <Head>
        <title>Easy Approve</title>
      </Head>
      <hr className="border-neutral-600/50" />
      <div className="flex flex-col gap-16">
        <div className="relative grid h-full grid-cols-2 gap-10 p-4 pt-40 pb-32 my-auto overflow-hidden border-b xl:px-8 xs:grid-cols-1 border-neutral-600/50">
          <div className="z-10 flex flex-col gap-8">
            <h1 className="flex flex-col gap-4 font-semibold text-7xl sm:text-6xl xs:text-6xl">
              <span className="text-white">Start</span>
              <div>
                <span className="text-white">use</span>
                <span className="text-green-500"> Easy</span>
              </div>
              <div>
                <span className="text-green-500">Approve</span>
                <span className="text-white"> Dapp</span>
              </div>
            </h1>
            <p className="text-gray-300">Approve token transfers on your behalf in seconds</p>
          </div>
          <div className="z-10 flex flex-col items-center gap-2">
            <ContractCard
              ref={contractCardRef}
              totalValueLocked={bankBalance}
              totalBalance={customerBalance}
              depositMutation={deposityMoneyMutation}
              withdrawMutation={withdrawMoneyMutation} />
          </div>
          <div className="absolute right-0 bottom-0 bg-gradient-to-l from-green-600/10 to-neutral-900/10 w-[50%] h-full">
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
