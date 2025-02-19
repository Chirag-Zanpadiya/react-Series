import conf from "../conf/conf";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, userId, status }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteColletionId,
        slug,

        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite :: FileService :: createPost :: errors ", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, userId, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteColletionId,
        slug,
        // agar title aur content update karte hai toh thick hai varna purana nahi tile context featured image rakhlo
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite :: FileService :: updatePost :: errors ", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteColletionId,
        slug
      );

      // agar yaha tak ayage matlab
      // post succesfully delete ho gayi hia

      return true;
    } catch (error) {
      console.log("Appwrite :: FileService :: updatePost :: errors ", error);
      return false;
    }
  }

  // TODO: get single post

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteColletionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite :: FileService :: getPost :: errors ", error);
      return false;
    }
  }

  // yaha pe hame wo hi post chahiye jiska
  // status active ho
  // us ke liye hame query lagani padege
  // query ko optimize karne liye hame index lagayi he status per

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteColletionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite :: FileService :: getPosts :: errors ", error);
      return false;
    }
  }

  // yaha pe ham image upload karana wala section service likhe ge

  // waha file == wo image jo upload karni hai

  //   ye below fns jab ham run karege toh hame fildId return  karege wo hame delete karne me help karege
  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite :: FileService :: uploadFile :: errors ", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(conf.appwriteBucketId, fileId);

      //   yaha tak ayage matbal
      // file successfully delete ho gayi hai

      return true;
    } catch (error) {
      console.log("Appwrite :: FileService :: deleteFile :: errors ", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.storage.getFilePreview(conf.appwriteBucketId, fileId);
  }

  downloadFile(fileId) {
    return this.storage.getFileDownload(fileId);
  }
}

const service = new Service();

export default service;

// TODO: return type ke liye
// Aapka samajhna bilkul sahi hai. Jab aap createPost aur updatePost methods mein return statement use karte hain, to aap ensure karte hain ki jo data create ya update hua hai, wo UI pe reflect ho sake. Yeh approach useful hota hai jab aapko immediately updated data ko UI pe dikhana hota hai. Is tarah se aapka code efficiently documents aur files ko manage kar sakta hai aur UI pe updated data ko dikhane ke liye use kar sakta ha

// TODO: qeries ke liye
// Appwrite में Index बनाने का कारण Query Performance को Optimize करना होता है। आपने अपने Blog App में status attribute पर Index इसलिए बनाया होगा ताकि आप active status वाले posts को जल्दी और efficiently fetch कर सकें।

// Indexing क्यों किया गया?
// जब हम किसी attribute पर Index बनाते हैं, तो database queries तेज़ हो जाती हैं।
// status attribute पर Index बनाने से getPosts function में केवल "active" posts को जल्दी filter किया जा सकता है।
// बिना Index के, हर बार query पूरे database को scan करेगी, जो slow हो सकता है।
// जब getPosts function call होता है तो सिर्फ active posts ही क्यों आते हैं?
// js
// Copy
// Edit
// const posts = databases.listDocuments(
//     "blogDatabase",
//     "postsCollection",
//     [Query.equal("status", "active")]
// );
// यहाँ Query.equal("status", "active") filter apply कर रहा है ताकि सिर्फ वही posts आएँ जिनका status "active" है।
// Indexing की वजह से यह filtering बहुत fast होती है, क्योंकि database को हर बार सारे documents scan नहीं करने पड़ते।
// फायदा
// ✅ Faster Queries – Active posts को जल्दी fetch किया जा सकता है।
// ✅ Better Scalability – जैसे-जैसे data बढ़ेगा, performance अच्छी बनी रहेगी।
// ✅ Efficient Filtering – Unnecessary posts को पहले से ही eliminate कर देता है।

// अगर आप चाहते हैं कि कुछ और statuses (जैसे "draft" या "archived") के posts भी दिखें, तो आप query में changes कर सकते हैं:

// js
// Copy
// Edit
// Query.in("status", ["active", "draft"])
// इससे active और draft दोनों status वाले posts आ जाएँगे। 🚀
