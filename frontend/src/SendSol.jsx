import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL,PublicKey, SystemProgram, Transaction } from "@solana/web3.js"
import { useState } from "react"

export function SendSol(){
    const wallet = useWallet()
    const { connection } = useConnection()
    const [toAccount , setToAccount] = useState('')
    const [ amount , setAmount] = useState(0)
    
    async function sendSol(){
        const transaction = new Transaction()

        transaction.add(SystemProgram.transfer({
            fromPubkey : wallet.publicKey,
            toPubkey : new PublicKey(toAccount),
            lamports : amount * LAMPORTS_PER_SOL
        }))

        await wallet.sendTransaction(transaction,connection);
        alert("sent" + amount + " SOL to "+ toAccount)
    }

    return (
        <div>
            <input type="text" placeholder="to" onChange={(e)=>{
                setToAccount(e.target.value)
            }}/>
            <input type="text" placeholder="amount" onChange={(e)=>{
                setAmount(e.target.value)
            }}/>
            <button onClick={sendSol}>send</button>
        </div>
    )
}