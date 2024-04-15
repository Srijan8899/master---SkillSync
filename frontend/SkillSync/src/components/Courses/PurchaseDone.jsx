import React from 'react'
import { NavLink } from 'react-router-dom'

const PurchaseDone = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-4xl font-bold text-center mb-8">Payment Successful</h1>
    <NavLink to={"/dashboard"}>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Go to Dashboard
    </button>
    </NavLink>
  </div>  )
}

export default PurchaseDone