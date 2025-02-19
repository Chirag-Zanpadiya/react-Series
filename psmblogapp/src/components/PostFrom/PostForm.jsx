import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Select, Input, RTE } from "../index";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || " ",
        slug: post?.$id || " ",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth?.userData);

  const submit = async (data) => {
    // console.log(data);
    
    if (post) {
      //
      //   agar use new photo upload kiya hai toh new photo lelo
      // agar nahi liya hai toh null set kardo
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;

      // agar new photo ko liya hai toh purana phto delete kardo
      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }

      //   post ko update bhi karana padega
      // ...data ko spread karega like title  , content , slug aisa
      // featuredImage : case : 1 agar new photo aya hai toh new phto ka id appwrite service se ayegaTODO: featuredImage = file.$id
      // : case : 2 agar new photo nahi aya hai toh purana photo lelo TODO:  featuredImage : post.featuredImage
      const dpPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : post.featuredImage,
      });

      //   phir ham use ko is post per navigate kara dege
      if (dpPost) {
        navigate(`/post/${dpPost.$id}`);
      }
    } else {
      //Kya ho raha hai:
      // Yahan pe hum appwriteService.uploadFile function ko call kar rahe hain aur data.image[0] pass kar rahe hain. Ye assume karta hai ki user ne image file select ki hai aur wo image ek array ke form mein aayi hai.
      // Example: Agar user ne "blog-pic.jpg" choose kiya hai, toh ye function us file ko upload karega aur file ka object return karega.

      const file = await appwriteService.uploadFile(data.image[0]);
      //   Kya ho raha hai:
      //   Yahan hum check kar rahe hain ki file successfully upload hui ya nahi. Agar file valid object hai, toh condition true hogi.
      if (file) {
        //Kya ho raha hai:
        // Agar file upload ho jati hai, toh hum us file ka unique ID (file.$id) nikal lete hain aur use fileId variable mein store karte hain.
        // Fir, hum data object ke andar featuredImage property ko set kar dete hain, jismein yeh naya file ID assign hota hai.
        // Example: Agar file ka ID "abc123" hai, toh data.featuredImage "abc123" ho jayega.
        const fileId = file.$id;
        data.featuredImage = fileId;

        //Kya ho raha hai:
        // Ab hum appwriteService.createPost function call karte hain. Yahan hum pura data spread kar dete hain (jaise title, content, featuredImage, etc.) aur saath hi current user ka ID bhi add kar dete hain (userId: userData.$id).
        // Ye function naya post create karta hai database mein.
        // Example: Agar data mein title "My First Post", content "Hello World", aur featuredImage "abc123" hai, aur current user ID "user789" hai, toh post create hoga with all these details.
        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id,
        });

        // Agar createPost se post successfully create ho jata hai aur dbPost object mil jata hai, toh hum navigate function call karke user ko us nayi post ke page par redirect kar dete hain.
        // Example: Agar new post ka ID "post456" milta hai, toh user ko /post/post456 URL par le jaya jayega.
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
        return value
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d\s]+/g, "-")
            .replace(/\s/g, "-");

    return "";
}, []);

React.useEffect(() => {
    const subscription = watch((value, { name }) => {
        if (name === "title") {
            setValue("slug", slugTransform(value.title), { shouldValidate: true });
        }
    });

    return () => subscription.unsubscribe();
}, [watch, slugTransform, setValue]);

  return (
    <>
<form onSubmit={handleSubmit(submit)}>
  <div className="flex flex-col md:flex-row bg-black min-h-screen w-full mt-12">
    {/* Left Section */}
    <div className="w-full md:w-3/4 px-2 mt-16">
      <Input
        label="Title"
        placeholder=""
        className="mb-4 text-white"
        {...register("title", { required: true })}
      />

      <Input
        label="Slug :"
        placeholder=""
        className="mb-4 text-white"
        {...register("slug", { required: true })}
        onInput={(e) => {
          setValue("slug", slugTransform(e.currentTarget.value), {
            shouldValidate: true,
          });
        }}
      />

      <RTE
        label="Content :"
        name="content"
        control={control}
        defaultValue={getValues("content")}
      />
    </div>

    {/* Right Section */}
    <div className="w-full md:w-1/4 mt-3 md:mt-20 flex flex-col justify-center items-center px-2">
      <div className="flex items-center justify-center w-full ">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <Input
            id="dropzone-file"
            label="Featured Image :"
            type="file"
            className="mb-4 hidden"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
          />
        </label>
      </div>

      {post && (
        <div className="w-full mb-4">
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-lg"
          />
        </div>
      )}

      <div className="flex w-full justify-between items-center">
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4 w-3/4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-blue-500" : undefined}
          className="bg-red-600 text-white rounded-xl flex justify-center items-center w-1/4 py-2 px-4"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </div>
  </div>
</form>

    </>
  );
}

export default PostForm;
