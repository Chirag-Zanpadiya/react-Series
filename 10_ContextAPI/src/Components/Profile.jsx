import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
   if(!user)  return <div>Please Enter UserName First</div>;
   if(user) return <div> WelCome {user.username } </div> 
  //  TODO: yaha peme user.username isliye likha hai ki waha jag hame login pages setuser karte time dono passown and username pass kiya hai isliye
}

export default Profile;



// Aapka explanation bilkul sahi hai. user.username ko access karne ka reason yeh hai ki aap login page pe setUser function ko call karte waqt username aur password dono values pass kar rahe hain. Isliye, user object ke andar username property available hai aur aap usse access kar sakte hain. Is tarah se aapka Profile component user ko welcome message show karne ke liye user.username ko access karta hai.

// useContext Hook:

// useContext hook ka use karke hum UserContext ko consume karte hain, jisse humein user object milta hai.
// Agar user null ya undefined hai (matlab user set nahi hai ya login nahi kiya gaya hai), toh hum conditional rendering ka use karte hain.
// Initial User State:

// Jab component pehli baar render hota hai, toh ho sakta hai ki user null ya undefined ho. Yeh ho sakta hai agar user ki data API se fetch ho rahi ho ya agar user login nahi kiya ho.
// Hum if (!user) check karte hain taaki agar user available nahi ho, toh hum ek prompt message show karein jisme user se username enter karne ke liye bola jaye.
// Conditional Rendering:

// Agar user available hai, toh hum safely user.username ko access karke welcome message show karte hain.
// Yeh ensure karta hai ki hum user object ke properties ko tabhi access karein jab woh null ya undefined na ho.
// Why We Can't Directly Print user:
// Error Prevention:

// Agar user null ya undefined hai, aur hum directly user.username ko access karenge, toh error aayega.
// if (!user) check karna zaroori hai taaki hum null ya undefined object ke properties ko access na kar paayein.
// Asynchronous Flow:

// Agar user data asynchronously fetch ho raha hai (for example, backend se), toh user initially null ho sakta hai. Agar hum bina check kiye user.username ko access karenge, toh error ho jayega.
// Aap is comment ko apne code me add kar sakte hain taaki future me kisi ko samajh aaye ki yeh flow