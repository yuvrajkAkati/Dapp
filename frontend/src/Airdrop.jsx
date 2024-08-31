import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"
import { useState } from "react"

export function Airdrop(){
    const wallet = useWallet()
    const [amount,setAmount] = useState(0)
    const {connection} = useConnection()

    async function sendAirdropToUser(){
        await connection.requestAirdrop(wallet.publicKey,amount)
        alert("hi")
    }
    return (
        
        <div>
            
            <input type="text" placeholder="amount" onChange={(e)=>{
                setAmount((e.target.value) * 1000000000)
            }}/><button onClick={sendAirdropToUser}>send airdrop</button>
        </div>
    )
}