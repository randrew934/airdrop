import bs58 from 'bs58';
import * as prompt from 'prompt-sync';



export const base58ToWallet = (base58: string): Uint8Array => {
    try {
      const wallet = bs58.decode(base58);
      console.log('Decoded Wallet:', wallet);
      return wallet;
    } catch (error) {
      console.error('Error decoding base58:', error);
      throw error;
    }
  };
  
  // Function to encode a wallet (Uint8Array) into Base58
  export const walletToBase58 = (wallet: Uint8Array): string => {
    try {
      const base58 = bs58.encode(wallet);
      console.log('Encoded Base58:', base58);
      return base58;
    } catch (error) {
      console.error('Error encoding wallet to base58:', error);
      throw error;
    }
  };
  
  // Example test for walletToBase58 function
  const wallet: Uint8Array = new Uint8Array([77,16,36,247,27,65,141,71,96,130,246,242,203,9,96,124,235,14,97,222,98,200,228,106,246,47,187,108,71,82,78,95,81,198,199,108,174,88,123,153,179,64,12,224,113,5,39,246,205,177,221,225,96,137,169,160,131,233,245,201,199,12,132,183]);
  
  const base58 = walletToBase58(wallet);
  console.log(base58); // prints the encoded base58 string
  
  // Example test for base58ToWallet function
  const decodedWallet = base58ToWallet("3Nka7TtHddvjGMbJWxnuw8CpMma1gu8auZnkDKok8oXsg62JzKAUAGrNrcrvFnWZvpXvyxnkvseMQ666XNDRMPsg");
  console.log(decodedWallet); // prints the decoded wallet array