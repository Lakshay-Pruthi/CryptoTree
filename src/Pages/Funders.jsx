import { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar'

function Funders(props) {

    const { web3, contract, Funding } = props;
    const [name, setName] = useState(null)
    const [amount, setAmount] = useState(null)
    const [message, setMessage] = useState(null)
    const [detailsFound, setDetailsFound] = useState(false);
    const [searchResult, setSearchResult] = useState('Please Enter your address')



    async function fetchDetails(e) {
        e.preventDefault();
        const inputAddress = e.target[0].value;
        console.log(inputAddress);
        try {
            setSearchResult('Loading...')
            const user = await contract.methods.funders(inputAddress).call();
            if (user[1] != 0) {
                setDetailsFound(true)
                setName(user[0]);
                setAmount(web3.utils.fromWei(user[1], 'ether'));
                setMessage(user[2]);
            } else {
                setDetailsFound(false)
                setSearchResult('No Details Found')
            }
        } catch (error) {
            setSearchResult('Please Enter a valid Address')
        }
    }

    return (
        <>
            <div className="container">
                <div className="Funder-box">
                    <Navbar Funding={Funding} />
                    {detailsFound ? (
                        <div className='userFetchedDetails'>
                            <div><span className='searchResult'>Name</span>: {name}</div>
                            <div><span className='searchResult'>Amount</span>: {amount} sepoliaETH</div>
                            <div><span className='searchResult'>Message</span>: {message}</div>
                        </div>
                    ) : (
                        <p className='searchResult'>{searchResult}</p>
                    )
                    }
                    <form onSubmit={fetchDetails} className="getMessageBox" >
                        <input type="text" placeholder='Enter your Transaction address' />
                        <button type='submit'>GO</button>
                    </form>
                </div>
            </div >
        </>
    )
}

export default Funders;