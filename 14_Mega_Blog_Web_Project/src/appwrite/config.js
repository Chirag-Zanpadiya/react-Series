import conf from "../conf/conf";
import { Client, Databases, ID, Storage, Query } from "appwrite";

// yaha dono services ayegi document create karne wali
// 2 file upload karne wali
export class Service {






  client = new Client();
  databases;
  bucket; // storage service

  constructor() {

    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    //   this databases for the document
    this.databases = new Databases(this.client);

    //   this storage == bucket kehto sirt variable ke to nam hi hai for the file upload
    this.bucket = new Storage(this.client);
  }

  //   methods for the ducoment
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteColletionId,
        slug,

        // content
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
    }
  }

  //   updatepost me slug separate pass karna padega
  // kyuki docs me document_id == slug rakhege separate sahi rahega
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteColletionId,
        slug,
        {
          // new wala title , content , featuredImage , status nahi pass kiya toh old wala
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: updatePost :: error", error);
    }
  }

  //   document ko delete karne ke liye toh sirt document_id lagti hai toh sirt slug pass karuga
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteColletionId,
        slug
      );
      //   yatak agaye matlab post sucessfully delete ho gaya ha
      //   toh ham return kar dege
      return true;
    } catch (error) {
      console.log("Appwrite service :: deletePost :: error", error);
      return false;
    }
  }

  //   get one post
  // single post mil gaya hai yaha pe
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteColletionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite service :: getPost :: error", error);
      return false;
    }
  }

  //   get all post
  // methods
  // yaha pe wahi post chayiye jinka status == active ho
  // index jo lagaye hi toh ham query laga sakte hai
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteColletionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts :: error", error);
      return false;
    }
  }










  //   services of file upload ki methods
// below chahe toh alag file me store kara sakte hai










  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("  Appwrite service :: uploadFile :: error", error);
      return false;
    }
  }

  //   fildId == jab ap uploadFile ko call karoge toh woh return fileId karege
  //  featuredImage me fileId pass karna padega
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error", error);
      return false;
    }
  }

  //   get file preview
  // image ka preview mil jayega
  // image file size smaller then 10MB
  // file id pass karna padega
  // bina promise toh direct function
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
  }

  //   file ko download karne ke liye
  // method

  getFileDownload(fileId) {
    return this.bucket.getFileDownload(conf.appwriteBucketId, fileId);
  }
}

const service = new Service();

export default service;
