import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Home from './Pages/Home'
import Funders from './Pages/Funders'
import Error from './Pages/Error'
import Web3 from 'web3';
import CryptoPlant from './contracts/CryptoPlant.json'
import About from './Pages/About';

function App() {
  const provider = window.ethereum;
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [userAccount, setUserAccount] = useState(123);


  if (provider) {
    // WEB3 PROVIDER

    useEffect(() => {
      function loadWeb3() {
        setWeb3(new Web3(provider));
        window.ethereum.enable();
      }

      provider && loadWeb3();
    }, [provider]);

    // CONTRACT

    useEffect(() => {
      async function loadContract() {
        // const contractAddress = "0x337dc8eC17C402604DaB8034c6A20ec687049ac9";
        const sepoliaContractAddress = '0x41EfA3732183CB1EFA8c163d42a324039FCc6f0a';
        // For Goerli
        // var contract = await new web3.eth.Contract(CryptoPlant.abi, '0x8C9B856a6a22604793a97a0508d4Bdc245f424fF');

        // For Ganache
        // var contract = await new web3.eth.Contract(CryptoPlant.abi,contractAddress); 

        // For sepolia
        var contract = await new web3.eth.Contract(CryptoPlant.abi, sepoliaContractAddress);
        setContract(contract);
      }
      provider && web3 && loadContract();
    }, [provider, web3]);


    ethereum.on("accountsChanged", () => {
      setUserAccount();
    });

    ethereum.on('chainChanged', (_chainId) => window.location.reload());
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/CryptoTree' element={<Home provider={provider} web3={web3} contract={contract} userAccount={userAccount} setUserAccount={setUserAccount} />} />
        <Route path='/CryptoTree/Funders' element={<Funders web3={web3} contract={contract} />} />
        <Route path='/CryptoTree/About' element={<About />} />
        <Route path='*' element={<Error />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
