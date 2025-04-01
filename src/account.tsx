import { useAccount, useDisconnect } from "wagmi"

export function Account() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6 mt-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Connected Wallet</h2>
          <p className="text-sm text-gray-600 mt-1 font-mono break-all">
            {address}
          </p>
        </div>
        <button
          onClick={() => disconnect()}
          className="px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors"
        >
          Disconnect
        </button>
      </div>
    </div>
  )
}