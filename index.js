/** @format */

// Import necessary libraries
const { MerkleTree } = require("merkletreejs");
const SHA256 = require("crypto-js/sha256");

// List of Ethereum wallet addresses
const addresses = [
  "0xB4671378533030f1A9D1989B652B183cFF9cdb3B",
  "0x7F259474951106d960F417C749E22c7424bcF8c5",
  "0xD52F7F6eaB7f40CEc38641eb7D2f9C150755449F",
  "0xaA3136A4A8800acbD2eD762B0E0D24C001226425",
  "0x98518eD24B171ad5E369F0D6e77e925183CEc406",
];

// Create an array of hashed addresses (leaves)
const leaves = addresses.map((x) => SHA256(x));

// Build a Merkle Tree using the hashed addresses and SHA256 hash function
const tree = new MerkleTree(leaves, SHA256);

// Compute the root of the Merkle Tree
const root = tree.getRoot().toString("hex");

// Function to verify the authenticity of an address
function verify(address) {
  // Hash the address to get the corresponding leaf
  const leaf = SHA256(address);

  // Get the proof of inclusion for the leaf
  const proof = tree.getProof(leaf);

  // Check if the address is authentic by verifying it against the Merkle Tree
  console.log(tree.verify(proof, leaf, root));
}

// Verify the authenticity of the fifth address in the list
verify(addresses[4]);
