import React, { useCallback, useEffect, useState } from "react";
import { PostForm } from "../components/index";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPosts] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        }
      });
    } else {
      navigate("/allpost");
    }
  }, [slug, navigate]);
  return post  ? (
<>
<div className="py-8 bg-black ">
    <PostForm post = {post}/>
</div>
</>
  ):null;
}

export default EditPost;
