import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <div className="container">

                <div className="form-box">

                    <Link id="backToHome" to='/CryptoTree/'> &lt; Back</Link>

                    <p id="about">CryptoTree is a decentralized crowdfunding platform designed to raise funds for planting trees, utilizing the power of blockchain technology. Built using React, this app is easy to use, intuitive, and accessible to all. The app's underlying smart contract is deployed on the Sepolia blockchain, which ensures the safety, security, and transparency of all transactions. With this platform, people can make a real impact on the environment by contributing towards planting trees, which are critical for combating climate change. This app is a testament to the potential of decentralized technology to create positive change in the world.</p>

                </div>
            </div>
        </>
    )
}

export default About;