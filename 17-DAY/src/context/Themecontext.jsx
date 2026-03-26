import { useState } from "react";
import { createContext } from "react"



export const themeDataContext=createContext();

const [theme, settheme] = useState('light')

const Themecontext = (props) => {
  return (
    <div>
      <themeDataContext.Provider value={[theme,settheme]}>
      {props.children}
      </themeDataContext.Provider>
        
      {/* //APP yaha pr children hai themecontext ka
      {props.children} */}
    </div>
  )
}

export default Themecontext