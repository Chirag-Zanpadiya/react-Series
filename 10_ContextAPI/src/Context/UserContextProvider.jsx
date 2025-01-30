import React from "react";
import UserContext from "./UserContext";

function UserContextProvider({ children }) {
  const [user, setUser] = React.useState(null);
  return (

    // jo bhi is provider ka use karege unke pass user and setuser ka access hoga
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;




// इस Code में क्या हो रहा है?
// UserContextProvider नाम का एक React Component बनाया गया है।

// यह provider component का काम करेगा।
// जो भी component इसके अंदर होगा, उसे user और setUser access करने का अधिकार मिलेगा।


// useState Hook का उपयोग करके user नाम की state बनाई गई है।
// const [user, setUser] = useState(null);
// user → यह state में user की जानकारी रखेगा।
// setUser → इससे user की जानकारी update कर सकते हैं।



// Context Provider का उपयोग किया गया है।
// <UserContext.Provider value={{ user, setUser }}>
//    {children}
// </UserContext.Provider>
// UserContext.Provider → सभी child components को user और setUser उपलब्ध कराएगा।
// value={{ user, setUser }} → जो भी इस Provider के अंदर होगा, वो user और setUser को access कर सकेगा।
// {children} → यह UserContextProvider के अंदर आने वाले सभी child components को render करेगा।