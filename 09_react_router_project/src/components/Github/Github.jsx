import React, { useEffect, useState } from "react";
import { data, useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);

  //     // below methods me thoda sa leg ho raha hai observeit
  //   useEffect(() => {
  //     fetch('https://api.github.com/users/ChiragZanpadiya')
  //       .then((res) => res.json())
  //       .then((data) => {setData(data)});
  //   }, []);


//   thoda sa optimazation lane keliye ye use hota hai
  const data = useLoaderData();

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-gray-500 text-3xl text-white p-4 mt-4 mb-4">
          {" "}
          Github Followers : {data.followers}
        </div>

        <img src={data.avatar_url} alt="github photo" className="w-[300px]" />
      </div>
    </>
  );
}

export default Github;

// chota sa leg dur karne keliye aur optimazation karne ke liye

// iske liye use hoga hooks :useLoaderData
export const getGithubInfo = async () => {
  let data = await fetch("https://api.github.com/users/ChiragZanpadiya");

  return data.json();
};
