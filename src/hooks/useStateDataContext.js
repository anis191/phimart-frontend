import { useContext } from "react";
import StateDataContext from "../context/StateDataContext";

const useStateDataContext = () => {
    return useContext(StateDataContext)
};

export default useStateDataContext;