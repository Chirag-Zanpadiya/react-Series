import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) // Your API Endpoint
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  //   TODO: createAccout
  async createAccount({ email, password, username }) {
    try {
      const userdata = await this.account.create(
        ID.unique(),
        email,
        password,
        username
      );

      if (userdata) {
        // userdata successfully login ho jata hai toh direct useko login kara dete hai

        return this.login({ email, password });
      } else {
        return userdata;
      }
    } catch (error) {
      console.log("Appwrite :: AuthService :: createAccount :: errors ", error);
    }
  }

  //   TODO:logi

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Appwrite :: AuthService :: login :: errors ", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(
        "Appwrite :: AuthService :: getCurrectUser :: errors ",
        error
      );
    }

    return null;
  }

  async logout() {
    try {
      // ye use ke sare sessions delete kar deta hai jaha per bhi user login hai

      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite :: AuthService :: logout :: errors ", error);
    }
  }
}

const authService = new AuthService();
export default authService;
