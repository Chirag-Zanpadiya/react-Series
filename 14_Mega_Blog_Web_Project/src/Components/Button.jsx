import React from 'react'

// Children == btn name
function Button(
    {
        children,
        type = "button",
        bgColor = "bg-blue-600",
        textColor = "text-white",
        className = '',
        ...props
    }
) {
  return (
    <div>
      <button className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor} `} {...props} > {children} </button>
    </div>
  )
}

export default Button


// ...props ka matlab hai ki key values pairs like this 
// type = "radio"