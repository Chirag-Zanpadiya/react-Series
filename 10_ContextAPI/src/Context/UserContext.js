import React from "react";



const UserContext = React.createContext();

export default UserContext;



// createContext() एक नया Context object बनाता है।
// यह data को globally share करने में मदद करता है।
// Context का उपयोग props drilling को रोकने के लिए किया जाता है।