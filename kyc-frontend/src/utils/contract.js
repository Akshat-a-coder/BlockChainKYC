const ethers = require("ethers");

// Replace this with your deployed contract's address
const CONTRACT_ADDRESS = "0xDd4cf1935e137e349Ad7f187aD97d238e94f84C8";

const CONTRACT_ABI = 
[
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "customerId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "addedBy",
        "type": "address"
      }
    ],
    "name": "CustomerAdded",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "customers",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "bytes32",
        "name": "encryptedKYC",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "addedBy",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getCurrentCustomerId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "kycData",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "secretKey",
        "type": "string"
      }
    ],
    "name": "addCustomer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "customerId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "kycData",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "secretKey",
        "type": "string"
      }
    ],
    "name": "verifyKYC",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "customerId",
        "type": "uint256"
      }
    ],
    "name": "getCustomer",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "addedBy",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
]

// export const getContract = async () => {
//     if (!window.ethereum) throw new Error("MetaMask is not installed!");
  
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     await provider.send('eth_requestAccounts', []); // This prompts the user to connect MetaMask
//     const signer = provider.getSigner();
//     return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
//   };

export const getContract = async () => {
  const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
  const signer = provider.getSigner(); // Use the first account from local blockchain
  return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
};
  