import { createContext, useContext, useState } from "react";

const CommissionContext = createContext()

export const useCommissionContext = () => {
  return useContext(CommissionContext)
}

export const CommissionProvider = ({children}) => {
  const [commissionStatus] = useState(false)

  return (
    <CommissionContext.Provider value={{ commissionStatus }}>
      {children}
    </CommissionContext.Provider>
  )
}