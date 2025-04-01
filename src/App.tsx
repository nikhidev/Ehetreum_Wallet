import { WagmiProvider } from "wagmi";
import { config } from "./config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SendTansaction } from "./sendTransaction";
import { Account } from "./account";
import { ConnectWallet } from "./wallet-options";


export function App() {
const queryClient = new QueryClient();
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> 
        <div className="min-h-screen bg-gray-100 py-12 px-4">
          <div className="max-w-md mx-auto space-y-6">
            <ConnectWallet/>
            <Account />
            </div>
         
            <SendTansaction  />

         
        
        </div>
      </QueryClientProvider> 
    </WagmiProvider>
  )
}