import React from "react"
import { Connector, useConnect } from "wagmi"

export function ConnectWallet() {
  const { connectors, connect } = useConnect()

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-extrabold mb-4 text-gray-800 text-center">Ethereum  Wallet</h2>
      <div className="space-y-3">
        {connectors.map((connector) => (
          <WalletOption
            key={connector.uid}
            connector={connector}
            onClick={() => connect({ connector })}
          />
        ))}
      </div>
    </div>
  )
}

function WalletOption({
  connector,
  onClick,
}: {
  connector: Connector
  onClick: () => void
}) {
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    ;(async () => {
      const provider = await connector.getProvider()
      setReady(!!provider)
    })()
  }, [connector])

  return (
    <button
      disabled={!ready}
      onClick={onClick}
      className={`w-full p-3 rounded-md text-left transition-colors ${
        ready
          ? 'bg-indigo-100 hover:bg-indigo-200 text-indigo-800'
          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
      }`}
    >
      {connector.name}
      {!ready && <span className="text-xs ml-2">(loading)</span>}
    </button>
  )
}