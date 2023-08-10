import React, { useState } from "react";
import {
  useContract,
  useClaimToken,
  Web3Button,
  useAddress,
} from "@thirdweb-dev/react";
import Cat from "./tt.jpg"
import {
  Text
} from '@chakra-ui/react';
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

const contractAddress = "0x519Ed9Cdd699DE90A79b49834220E4bC186A697A";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border:"3px solid cyan",
    padding:"30px",
    borderRadius:"10px",
    flexDirection: "column",
    minHeight: "200px",
    margin: "20px",
  },
  input: {
    padding: "8px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "10px",
    width: "200px",
    textAlign: "center",
  },
  button: {
    cursor: "pointer",
    fontSize: "20px",
    padding: "5px",
    color: "white",
    margin: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "30px",
    textAlign: "center",
  },
};

export default function Tos() {
  const { contract } = useContract(contractAddress);
  const { mutateAsync: claimToken, isLoading, error } = useClaimToken(contract);
  const address = useAddress();

  const [tokenAmount, setTokenAmount] = useState(1);

  const handleIncrement = () => {
    setTokenAmount(tokenAmount + 1);
  };

  const handleDecrement = () => {
    if (tokenAmount > 1) {
      setTokenAmount(tokenAmount - 1);
    }
  };

  return (
    <div style={styles.container}>
       <Text color={'gray.500'}  style={{color:"cyan",fontFamily:"'Russo One', sans-serif",fontSize:"40px",textAlign:"center"}}   >
         Mint Your Tokens
          </Text>
        <img src={Cat} width={300} height={300} alt="" style={{borderRadius:"10px"}} />
        <br></br>
      <div>
        <button style={styles.button} onClick={handleDecrement}>
          -
        </button>
        <input
          style={styles.input}
          type="number"
          value={tokenAmount}
          onChange={(e) => setTokenAmount(e.target.value)}
        />
        <button style={styles.button} onClick={handleIncrement}>
          +
        </button>
      </div>
      <Web3Button
        contractAddress={contractAddress}
        action={() =>
          claimToken({
            to: address,
            amount: tokenAmount,
          })
        }
      >
        Mint {tokenAmount} Token{tokenAmount > 1 ? "s" : ""}
      </Web3Button>
      <br></br>
      <CrossmintPayButton
                collectionId="a15a22aa-1ec2-4e7f-aafa-3e43e9a85121"
                projectId="5e2e1af6-3897-42f9-9ae1-cf5696fd8e7f"
                mintConfig={{"type":"thirdweb-drop","totalPrice":(tokenAmount * 0.001).toString(),"quantity":tokenAmount}}
                environment="staging"
                
            />
    </div>
  );
}
