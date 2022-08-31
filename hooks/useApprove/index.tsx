import { useWeb3 } from "@3rdweb/hooks"
import { ethers } from "ethers"
import toast from "react-hot-toast"

export const useApprove = () => {
  const { address, provider } = useWeb3()
  const ERC20Abi = [
    "function approve(address spender, uint256 amount) external returns (bool)",
    "function allowance(address owner, address spender) external view returns (uint256)"
  ]

  const performValidations = (
    contractAddress: string,
    tokenAddress: string
  ) => {
    if (!provider) {
      toast.error("You need to be logged in to deposit money")
      return
    }

    if (contractAddress === "") {
      toast.error("Please enter a Defi protocol")
      return
    }

    if (tokenAddress === "") {
      toast.error("Please enter a Token address")
    }
  }

  const getCustomerAllowance = async (
    contractAddress: string,
    tokenAddress: string
  ) => {
    performValidations(contractAddress, tokenAddress)

    try {
      const signer = provider?.getSigner()
      const ERC20Contract = new ethers.Contract(tokenAddress, ERC20Abi, signer)
      const allowance = await ERC20Contract.allowance(address, contractAddress)
      return ethers.utils.formatEther(allowance)
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  const updateApproval = async (
    contractAddress: string,
    tokenAddress: string,
    amount: string
  ) => {
    performValidations(contractAddress, tokenAddress)
    if (amount === "0") {
      toast.error("Please enter an approval amount")
      return
    }

    try {
      const signer = provider?.getSigner()
      const ERC20Contract = new ethers.Contract(tokenAddress, ERC20Abi, signer)
      const tx1 = await ERC20Contract.approve(
        contractAddress,
        ethers.utils.parseEther("0")
      )
      await tx1.wait()

      const tx2 = await ERC20Contract.approve(
        contractAddress,
        ethers.utils.parseEther(amount)
      )
      await tx2.wait()
      toast.success("Approved amount successfully")
    } catch (error: any) {
      toast.error("Approval failed")
    }
  }

  return {
    updateApproval,
    getCustomerAllowance
  }
}
