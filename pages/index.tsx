import { AllowanceCard } from "components/AllowanceCard"
import { useApprove } from "hooks/useApprove"
import type { NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {
  const { updateApproval, getCustomerAllowance } = useApprove()

  return (
    <>
      <Head>
        <title>Easy Approve</title>
      </Head>
      <hr className="border-neutral-600/50" />
      <div className="flex flex-col gap-16">
        <div className="relative grid h-full grid-cols-3 gap-10 p-4 pt-40 pb-32 my-auto overflow-hidden border-b xl:px-8 xs:grid-cols-1 border-neutral-600/50">
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
            <p className="text-gray-300">
              Approve token transfers on your behalf in seconds
            </p>
          </div>
          <div className="z-10 flex flex-col col-span-2 gap-2">
            <AllowanceCard
              updateApproval={updateApproval}
              getCustomerAllowance={getCustomerAllowance}
            />
          </div>
          <div className="absolute right-0 bottom-0 bg-gradient-to-l from-green-600/10 to-neutral-900/10 w-[50%] h-full"></div>
        </div>
      </div>
    </>
  )
}

export default Home
