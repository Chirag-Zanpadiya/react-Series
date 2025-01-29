import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams();
  return (
    <div className='bg-gray-700 text-teal-300 p-4 mt-4 text-center text-3xl'>

    {/* ye userid jo router ne beja hai wo automatically yaha pe to nahi ayega */}
    {/* ya ha phir se ek hook ka use hoga */}
      User : {userid}
    </div>
  )
}

export default User
