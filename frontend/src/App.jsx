import { ethers } from 'hardhat'
import './App.css'
import abi from '../contractJson/Chia.json'
import { useState, useEffect } from 'react'

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  })

  const [account, setAccount] = useState("Not Connected")

  useEffect(()=>{ 
    const template = async()=>{
      const contractAddress = "0x71f87FAF141f2516dBf8845b41E5d43fcD1687De";
      const contractABI = abi.abi;

      try {
        //METAMASK
      const {ethereum} = window; 
      const account = ethereum.request({
        method: "eth_requestAccounts"
      })

      setAccount(account);

      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      )

      setState({provider, signer, contract})
      } catch (error) {
        alert(error)
      }

      

    }
    template();
  }, [])
  return (
    <>
      
    </>
  )
}

export default App
