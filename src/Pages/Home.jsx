import Navbar from '../Components/Navbar'
import Form from '../Components/Form'
import Footer from '../Components/Footer'
import { useState, useEffect } from "react";



function Home(props) {

    const { provider, web3, contract, userAccount, setUserAccount } = props;



    const [owner, setOwner] = useState(null);




    // OWNER
    useEffect(() => {
        async function getOwnerDetails() {
            const _owner = await contract.methods.owner().call();
            setOwner(_owner.toLowerCase());
        }
        contract && getOwnerDetails();
    }, [contract]);

    // USER

    useEffect(() => {
        async function getUserDetails() {
            const _users = await web3.eth.getAccounts();
            setUserAccount(_users[0].toLowerCase());
        }
        contract && getUserDetails();
    }, [contract, userAccount]);





    // TRANSFER FUNDS

    async function transferFunds(name, amount, message) {
        const address = userAccount;
        amount = web3.utils.toWei(amount, "ether")

        try {
            const transaction = await contract.methods.AddFunder(address, name, amount, message).send({
                from: userAccount,
                to: contract._address,
                value: amount
            });
            transaction && setFunding();
        } catch (error) {
            console.error('Transaction Cancelled due to some error');
        }
        return true;

    }

    // WITHDRAW FUNDS

    async function withdrawFundingAmount() {
        const transaction = await contract.methods
            .withdrawMoney()
            .send({ from: userAccount });
        transaction.status && setFunding();
    }





    return (
        <>
            <div className="container">

                <div className="form-box">
                    {provider ? (
                        <>
                            <Navbar web3={web3} contract={contract} />

                            <Form transactionFunction={transferFunds} withdrawFunction={withdrawFundingAmount} owner={owner} userAccount={userAccount} />
                        </>
                    )

                        :
                        <p id='impNote'>You need to install Metamask or any other wallet to use this app.</p>
                    }


                </div>
            </div>
            <Footer />
        </>
    )
}


export default Home;