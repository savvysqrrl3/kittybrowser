import React, { Component } from 'react';
import { object } from 'prop-types';
import Web3 from 'web3';
import kittyABI from '../contracts/KittyCoreABI.json';
import { CONTRACT_NAME, CONTRACT_ADDRESS } from '../config';
// import { ContractData, ContractForm } from "drizzle-react-components";

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
    
    console.log("context:", this.context.drizzle)
    var currentState = this.context.drizzle.store.getState()
    console.log("store:", currentState)



    // const dataKey = this.context.drizzle.contracts.CryptoKitties.methods.getKitty.cacheCall()
    // console.log("datakey:", dataKey)

    // const data = state.contracts.CryptoKitties.methods.getKitty[dataKey].value
    // console.log(data)
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
        
          {/* <ContractForm
              contract="kittyContract"
              method="getKitty"
              
            /> */}

        {/* Display Kitty info here */}

        {/* <strong>Birth Time</strong>:{" "}
              <ContractData
                contract="kittyContract"
                method="getKitty"

          /> */}


      </div>
    );
  }
}

Browser.contextTypes = {
  drizzle: object,
};

export default Browser;
