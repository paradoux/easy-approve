import { forwardRef, useState } from "react"
interface IAllowanceCardProps {
  updateApproval: any
  getCustomerAllowance: any
  ref: any
}

export const AllowanceCard = forwardRef<HTMLDivElement, IAllowanceCardProps>(
  ({ updateApproval, getCustomerAllowance }, ref) => {
    const [updateState, setUpdate] = useState({
      contractAddress: "",
      tokenAddress: "",
      amount: 0
    })

    const [currentAllowance, setCurrentAllowance] = useState("")

    const handleUpdate = (event: any) => {
      setUpdate({
        ...updateState,
        [event.target.name]: event.target.value
      })
    }

    const handleAllowanceRefresh = async () => {
      const result = await getCustomerAllowance(
        updateState.contractAddress,
        updateState.tokenAddress
      )
      setCurrentAllowance(result)
    }

    return (
      <div
        ref={ref}
        className="flex flex-col gap-6 p-5 mx-auto tracking-wide bg-black border rounded-md shadow-2xl border-neutral-600 font-audiowide"
      >
        <div className="flex flex-wrap justify-between">
          <span className="text-white ">
            Current allowance is: {currentAllowance}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-y-4">
          <div className="col-span-1 flex flex-col justify-between mx-1">
            <label className="text-sm font-bold text-neutral-200">
              Delegate contract address
            </label>
            <input
              name="contractAddress"
              className="py-3 text-white rounded outline-none appearance-none placeholder:text-neutral-400 bg-neutral-600 focus:bg-neutral-500"
              type="string"
              placeholder="0xc00e94Cb662C3520282E6f5717214004A7f26888"
              onChange={handleUpdate}
            />
          </div>
          <div className="col-span-1 flex flex-col justify-between mx-1">
            <label className="text-sm font-bold text-neutral-200">
              Token address
            </label>
            <input
              name="tokenAddress"
              className="py-3 text-white rounded outline-none appearance-none placeholder:text-neutral-400 bg-neutral-600 focus:bg-neutral-500"
              type="string"
              placeholder="0x6B175474E89094C44Da98b954EedeAC495271d0F"
              onChange={handleUpdate}
            />
          </div>
          <div className="col-span-1 flex flex-col justify-between mx-1">
            <label className="text-sm font-bold text-neutral-200">
              Approval Amount
            </label>
            <input
              name="amount"
              className="py-3 text-white rounded outline-none appearance-none placeholder:text-neutral-400 bg-neutral-600 focus:bg-neutral-500"
              type="number"
              placeholder="0.0"
              onChange={handleUpdate}
            />
          </div>

          <button
            className="flex items-center justify-center col-span-6 gap-2 p-2 px-4 transition-all bg-green-500 rounded-md hover:scale-105"
            onClick={() =>
              updateApproval(
                updateState.contractAddress,
                updateState.tokenAddress,
                updateState.amount.toString()
              )
            }
          >
            <span className="font-semibold">Update approval amount</span>
            {/* {approvalIncreaseMutation.isLoading && (
              <AiOutlineLoading3Quarters
                className="animate-spin"
                size="1.2rem"
              />
            )} */}
            {/* {!approvalIncreaseMutation.isLoading && (
              <FiPlusSquare size="1.2rem" />
            )} */}
          </button>

          <button
            className="flex items-center justify-center col-span-6 gap-2 p-2 px-4 transition-all bg-green-500 rounded-md hover:scale-105"
            onClick={handleAllowanceRefresh}
          >
            <span className="font-semibold">See current allowance</span>
          </button>
        </div>
      </div>
    )
  }
)

AllowanceCard.displayName = "AllowanceCard"
