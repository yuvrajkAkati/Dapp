import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"
import { useEffect, useState } from "react"

export function Balance(){
    const {connection} = useConnection()
    const wallet = useWallet()
    const [balance , setBalance ] = useState()
    async function GetBalance(){
        if(wallet.publicKey){
            const balance = await connection.getBalance(wallet.publicKey)
            setBalance(balance)
        }
    }
    GetBalance()

    return (
        <div>
            sol Balance : {balance / LAMPORTS_PER_SOL}
        </div>
    )
}