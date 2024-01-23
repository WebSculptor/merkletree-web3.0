<!-- @format -->

# Merkle Tree Verification

## Description

This repository contains a simple implementation of a Merkle Tree in JavaScript using the `merkletreejs` library. The code creates a Merkle Tree from a list of Ethereum wallet addresses and provides a function to verify the authenticity of a given address within the constructed Merkle Tree. The SHA256 hashing algorithm is used to hash the addresses and build the Merkle Tree.

## How It Works

1. **Address List:**

   - A predefined array (`addresses`) contains Ethereum wallet addresses.

2. **Hashing Addresses:**

   - Each address is hashed using the SHA256 algorithm, resulting in an array of hashed addresses (`leaves`).

3. **Building the Merkle Tree:**

   - The Merkle Tree is constructed using the `merkletreejs` library, with the hashed addresses as leaves and the SHA256 hash function.

4. **Computing the Root:**

   - The root of the Merkle Tree is computed and converted to a hexadecimal string.

5. **Verification Function (`verify`):**

   - The `verify` function takes an Ethereum wallet address as input.
   - It hashes the address to obtain the corresponding leaf in the Merkle Tree.
   - The proof of inclusion for the leaf is retrieved from the tree.
   - The function checks if the leaf, proof, and root match to determine the authenticity of the address.

6. **Example Usage:**
   - The provided example code demonstrates how to use the Merkle Tree and the verification function.

## Setup and Usage

1. **Installation:**

   - Install the required dependencies using `npm install merkletreejs crypto-js`.

2. **Run the Script:**

   - Copy the code from `merkle-tree-verification.js` into a JavaScript file.
   - Execute the script with Node.js: `node your-script-name.js`.

3. **Customization:**
   - Modify the `addresses` array or integrate the code into your project as needed.

Feel free to explore and use this Merkle Tree implementation for secure verification of Ethereum wallet addresses.
