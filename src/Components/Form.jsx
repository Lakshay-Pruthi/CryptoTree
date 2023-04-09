import { useState } from "react";

function Form(props) {
  const { transactionFunction } = props;

  const [transactionStatusMessage, setTransactionStatusMessage] = useState('Plant a Tree')

  async function submission(e) {
    e.preventDefault();
    let inputName = e.target[0].value;
    let inputAmount = e.target[1].value;
    let inputMessage = e.target[2].value;
    if (inputName == "") inputName = "A Good Person";
    if (inputMessage == "") inputMessage = "I love my Earth";
    setTransactionStatusMessage('Planting...')
    const answer = await transactionFunction(inputName, inputAmount, inputMessage);
    answer && setTransactionStatusMessage('Plant a Tree')

  }

  return (
    <>
      <form id="main-form" onSubmit={submission}>
        <h2>CryptoTree</h2>
        <div className="inputbox">
          <input type="text" />
          <label htmlFor="">Name</label>
        </div>
        <div className="inputbox">
          <input type="number" min="0.1" step='any' required />
          <label htmlFor="">Amount*</label>
        </div>
        <div className="inputbox">
          <input type="text" />
          <label htmlFor="">Message</label>
        </div>
        <button id="transfer" type="submit">{transactionStatusMessage}</button>
      </form>
    </>
  );
}

export default Form;
