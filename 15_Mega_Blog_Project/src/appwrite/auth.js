import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";

// BELOW systax for the quality code

export class AuthService {
  client = new Client();
  account;

  // me chahata hu ki jab object bane tab mera account bane
  // memory wastage kab ho jayega
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  //   createAccount me method jiska direct use karke
  // use ko nahi pata ki underthe hood appwrite ki services use kar rahe hai ya fierbase ki
  async createAccount({ email, password, name }) {
    // createAccount wala methods fail bhi ho sakta hai toh try catch lagana padega
    try {
      //   ID.unique() ye ek unique id generate karega
      //  isse hamare pass unique id aayega
      // id.unique is liye dalla kyuki documentation me diya hai

      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        // jo useraccout hai to directly hame uso login kara dege
        // yaha call another methods
        return this.login({ email, password });
      } else {
        // agar useaccount exists hi nahi karta toh ham error throw karege
        return userAccount;
      }
    } catch (error) {
      // throw error;
      console.log("Appwrite service :: createAccount :: error", error);
      
    }
  }

  //   login method
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      // throw error;
      console.log('Appwrite service :: login :: error', error);
      
    }
  }

  //   agar mei direct login me jata hu toh muhje pata kaise chalega ki user login hai ya nahi
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }

    //     GitHub Copilot
    // Aapke code mein null ko return karne ka reason yeh hai ki agar try-catch block mein koi error aata hai aur this.account.get() method fail ho jata hai, to method ko ek default value return karni chahiye. Is case mein, null ko return kiya gaya hai taaki method ka return type consistent rahe aur error handling ke baad bhi ek meaningful value return ho.

    // Explanation:
    // getCurrentUser Method:

    // getCurrentUser ek asynchronous method hai jo current logged-in user ka data fetch karta hai.
    // try-catch block ka use karke potential errors ko handle kiya gaya hai.
    // Error Handling:

    // Agar this.account.get() method fail hota hai, to catch block mein error ko log kiya jata hai.
    // // catch block ke baad null ko return kiya jata hai taaki method ka return type consistent rahe aur method ek meaningful default value return kare.

    return null;
  }

  async logout() {
    try {
      // use ke sare sesssion jo bhi brower se login kiya hai waha se remove karna chahta hu
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout :: error", error);
    }
  }

  
}

// jab bhi is AuthService to use karna hai toh uska object bana kar uski methods ham use kar sakte
// is ki bajay ham direct obj banege aur uske methods use karenge

const authService = new AuthService();
// authService.Account

export default authService;

// jo bhi is services ka use karege wo direct uski methods use karege

// Explanation:
// future me jabhi bhi authentication ke liye Appwrite service ka use karna hoga, to AuthService class ka object banakar uske methods ka use kiya jayega.
// AuthService Class: use kare direct
