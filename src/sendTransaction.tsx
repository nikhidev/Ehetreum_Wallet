import { parseEther } from "viem";
import { useSendTransaction } from "wagmi";

export function SendTansaction(){
    const{
        data:hash,
        isPending,
        sendTransaction,}=useSendTransaction()

    async function submit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formdata = new FormData(e.target as HTMLFormElement);
        const to = formdata.get("address") as `0x${string}`;
        const value = formdata.get("value") as string
        sendTransaction({to,value:parseEther(value)})
    }

    return(
       <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-6">
         <h2 className="text-xl font-bold mb-4 text-gray-800">Send Transaction</h2>
         <form onSubmit={submit} className="space-y-4">
           <div>
             <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
             <input 
               name="address" 
               placeholder="0xA0CF...251e" 
               required
               className="w-full p-2 border border-gray-300 rounded-md"
             />
           </div>
           <div>
             <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
             <input 
               name="value" 
               placeholder="0.5" 
               required
               className="w-full p-2 border border-gray-300 rounded-md"
             />
           </div>
           <button 
             disabled={isPending} 
             type="submit"
             className={`w-full py-2 px-4 rounded-md text-white font-medium ${
               isPending ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'
             }`}
           >
             {isPending ? "Processing..." : "Send"}
           </button>
           {hash && (
             <div className="mt-4 p-3 bg-green-50 text-green-800 text-sm rounded-md">
               Transaction Hash: {hash}
             </div>
           )}
         </form>
       </div>
    )
}