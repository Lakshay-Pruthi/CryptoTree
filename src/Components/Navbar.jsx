import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
function Navbar(props) {
  const { web3, contract } = props
  const [funding, setFunding] = useState(null);

  // FUNDING AMOUNT

  useEffect(() => {
    async function getFundingAmount() {
      let balance = await web3.eth.getBalance(contract._address);
      balance = web3.utils.fromWei(balance, "ether");
      setFunding(balance);
      console.log(balance);
    }
    contract && getFundingAmount();
  }, [contract, funding]);


  return (
    <>
      <nav>
        <div>
          <Link to="/CryptoTree/">Home</Link>
        </div>
        <div>
          <Link to="/CryptoTree/Funders">Get your message</Link>
        </div>
        <div>
          <Link id='aboutLink' to="/CryptoTree/About">About</Link>
        </div>
      </nav>
      <p id='AmountCollected'>Amount Collected : {funding} sepoliaETH</p>
    </>
  );
}

export default Navbar;
