import { ed25519 } from "@noble/curves/ed25519"
import { useWallet } from "@solana/wallet-adapter-react"
import { useState } from "react"
import base58 from "bs58"

export function SigningMessage(){

    const {publicKey , signMessage} = useWallet()
    const [ message , setMessage ] = useState('')
    async function onClick(){
        if(!publicKey){
            throw new Error('wallet not connected')
        }
        if(!signMessage){
            throw new Error('Wallet does not support signing!')
        }

        const encodedMessage = new TextEncoder().encode(message)
        const signature = await signMessage(encodedMessage)

        if(!ed25519.verify(signature,encodedMessage,publicKey.toBytes())){
            throw new Error('MEssage signature invalid')
        }

        alert(`message signature: ${base58.encode(signature)}`)
        console.log(base58.encode(signature))
    }

    return (
        <div>
            <input type="text" placeholder="message" onChange={(e)=>{
                setMessage(e.target.value)
            }} />
            <button onClick={onClick}>sign message</button>
        </div>
    )
}