
# Project Setup Guide

This guide will walk you through the steps to set up and run both the **Backend** (Smart Contract) and **Frontend** (React application) for this project.

---

## Backend Setup (Smart Contract)

1. **Install Dependencies**: Make sure you have Truffle installed. If not, install it using npm:
   ```bash
   npm install -g truffle
   ```

2. **Deploy Smart Contract Locally**:
   - Deploy the smart contract on your local machine using Ganache.
   - Compile the smart contract by running:
     ```bash
     truffle compile
     ```

3. **Start Ganache Network**:
   - Open a new terminal window and start Ganache:
     ```bash
     ganache-cli
     ```
   - This will start a local blockchain for your smart contract deployment.

4. **Run Tests**:
   - To run the tests for your smart contract, use the following command:
     ```bash
     truffle test
     ```

5. **Deploy to Local Ganache Network**:
   - To deploy the smart contract to the local Ganache network, run:
     ```bash
     truffle migrate --network development
     ```

6. **Deploy to Sepolia Testnet**:
   - To deploy the smart contract on the Sepolia testnet, use the command:
     ```bash
     truffle migrate --network sepolia
     ```

---

## Frontend Setup (React)

1. **Install Dependencies**:
   - Ensure you have Node.js and npm installed on your machine.
   - Navigate to the frontend directory and install the required packages:
     ```bash
     npm install
     ```

2. **Configure Smart Contract Details**:
   - Open the `src/utils/contract.js` file.
   - In this file, you'll find two variables: `CONTRACT_ADDRESS` and `CONTRACT_ABI`.
   - Update `CONTRACT_ADDRESS` with your own MetaMask account address if deploying to Sepolia, or update it with any of the Ganache test accounts if deploying locally.

3. **Start Frontend**:
   - Once the contract address is updated, start the React frontend by running:
     ```bash
     npm start
     ```
   - This will start the development server and open the frontend in your default web browser.

---

## Notes

- Ensure that MetaMask is configured correctly for the Sepolia network or Ganache, depending on where you're deploying.
- If you face any issues with deploying the smart contract, check the Ganache or Sepolia configurations in `truffle-config.js`.

---

By following these steps, you should be able to run both the backend (smart contract) and frontend (React application) of this project successfully.
