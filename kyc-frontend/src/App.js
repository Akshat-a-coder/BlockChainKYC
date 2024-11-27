import React, { useState } from "react";
import { getContract } from "./utils/contract";
import { ethers } from "ethers";


function App() {
  const [name, setName] = useState("");
  const [kycData, setKYCData] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [customerDetails, setCustomerDetails] = useState(null);
  const [verificationResult, setVerificationResult] = useState(null);

  const addCustomer = async () => {
    try {
      const contract = await getContract();
      const tx = await contract.addCustomer(name, kycData, secretKey);
      const receipt = await tx.wait();
      console.log(receipt);
      alert(`Customer added successfully! Transaction Hash: ${receipt.transactionHash} ,Gas Used: ${receipt.gasUsed}`);
    } catch (error) {
      console.error("Error adding customer:", error);
      alert("Failed to add customer.");
    }
  };


  const verifyKYC = async () => {
    try {
      const contract = await getContract();
      const parsedCustomerId = ethers.BigNumber.from(customerId);
      const isVerified = await contract.verifyKYC(parsedCustomerId, kycData, secretKey);
      alert('Customer is Verified');
      setVerificationResult(isVerified ? "Verified" : "Not Verified");
    } catch (error) {
      console.error("Error verifying KYC:", error);
      alert("Failed to verify KYC.");
    }
  };

  const getCustomer = async () => {
    try {
      const contract = await getContract();
      const customer = await contract.getCustomer(customerId);
      setCustomerDetails(customer);
    } catch (error) {
      console.error("Error fetching customer details:", error);
      alert("Failed to fetch customer details.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>KYC Management</h1>

      <section>
        <h2>Add Customer</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="KYC Data"
          value={kycData}
          onChange={(e) => setKYCData(e.target.value)}
        />
        <input
          type="text"
          placeholder="Secret Key"
          value={secretKey}
          onChange={(e) => setSecretKey(e.target.value)}
        />
        <button onClick={addCustomer}>Add Customer</button>
      </section>

      <section>
        <h2>Verify KYC</h2>
        <input
          type="text"
          placeholder="Customer ID"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
        />
        <input
          type="text"
          placeholder="KYC Data"
          value={kycData}
          onChange={(e) => setKYCData(e.target.value)}
        />
        <input
          type="text"
          placeholder="Secret Key"
          value={secretKey}
          onChange={(e) => setSecretKey(e.target.value)}
        />
        <button onClick={verifyKYC}>Verify KYC</button>
        {verificationResult && <p>Verification Result: {verificationResult}</p>}
      </section>

      <section>
        <h2>Get Customer Details</h2>
        <input
          type="text"
          placeholder="Customer ID"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
        />
        <button onClick={getCustomer}>Get Customer</button>
        {customerDetails && (
          <div>
            <p>Name: {customerDetails[0]}</p>
            <p>Added By: {customerDetails[1]}</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
