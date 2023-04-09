import { Link } from "react-router-dom";

function Error() {
    return (
        <>
            <div id="Error">This page doesn't exist. Please go back to <Link to='/' id="ErrorLink">Home</Link></div>
        </>
    )
}

export default Error;