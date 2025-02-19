import React from "react";

function Container({ children }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

export default Container;

// Haan, bilkul sahi. Container component ka use karke aap ensure karte hain ki jo bhi content iske andar aayega, wo horizontally center aligned hoga aur left aur right side pe equal margin aur padding hogi. Yeh approach responsive design ko support karta hai aur different screen sizes ke liye different padding values set karta hai.
