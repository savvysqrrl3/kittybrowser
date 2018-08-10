import React, { Component } from 'react';
import { object } from 'prop-types';
import Web3 from 'web3';
import kittyABI from '../contracts/KittyCoreABI.json';
import { CONTRACT_NAME, CONTRACT_ADDRESS } from '../config';
// import { ContractForm } from './Form'

class Browser extends Component {
  
  componentDidMount() {
    const web3 = new Web3(window.web3.currentProvider);

    // Initialize the contract instance

    const kittyContract = new web3.eth.Contract(
      kittyABI,
      CONTRACT_ADDRESS,
    );

    // Add the contract to the drizzle store

    this.context.drizzle.addContract({
      contractName: CONTRACT_NAME,
      web3Contract: kittyContract,
    });
  }

  render() {
    return (
      <div className="browser">
        <h1>
          Kitty Browser
        </h1>

        {/* Input to type in the kitty ID here */}
          <h4>
            Kitty ID:
          </h4>
          {/* <form>
            <input type="text" />
            <input type="submit" value="FIND KITTY" />
          </form>   */}
          {/* <ContractData contract="kittyContract" method="storedData" /> */}
          {/* <ContractForm contract="kittyContract" method="getKitty" /> */}

        {/* Display Kitty info here */}
      </div>
    );
  }
}

Browser.contextTypes = {
  drizzle: object,
};

export default Browser;
