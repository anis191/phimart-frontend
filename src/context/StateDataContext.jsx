import { createContext } from "react";
import useStateData from "../hooks/useStateData";

const StateDataContext = createContext()

export const StateDataProvider = ({children}) => {
    const allData = useStateData()
    return (
        <StateDataContext.Provider value={allData}>
            {children}
        </StateDataContext.Provider>  
    );
};

export default StateDataContext;