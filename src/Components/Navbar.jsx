import { Link } from 'react-router-dom'
function Navbar(props) {
  const { Funding } = props
  return (
    <>
      <nav>
        <div>
          <Link to="/CryptoTree">Home</Link>
        </div>
        <div>
          <Link to="/Funders">Get your message</Link>
        </div>
      </nav>
      <p id='AmountCollected'>Amount Collected : {Funding} sepoliaETH</p>
    </>
  );
}

export default Navbar;
