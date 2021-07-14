import { useState } from "react";
import AppContext from "./context";

export default function AppProvider({children}){
    const [urlShorten, setUrlShorten] = useState(null)

    function setToUrlShorten(value){
        setUrlShorten(value)
    }

    return(
        <AppContext.Provider value={{urlShorten, setToUrlShorten}}>
            {children}
        </AppContext.Provider>
    )
}