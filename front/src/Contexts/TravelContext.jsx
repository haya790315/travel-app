import React, { useEffect, useState, useContext } from "react";
import { projectFirestore } from "../firebase/config";

const TravelContext = React.createContext(undefined);

const TravelContextProvider = ({ children }) => {
  const [travelData, setTravelData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const fetchTravelData = async () => {
    const doc = await projectFirestore
      .collection("travelPlans")
      .doc("SSbyibFF1shnfxz38lDT")
      .get();

    try {
      setTravelData(doc.data().travelData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTravelData();
  }, []);
  
    return (
      <TravelContext.Provider value={{travelData,isLoading}}>
        {children}
      </TravelContext.Provider>
    );
  
};

const useTravelDataContext = () => {
  return useContext(TravelContext);
};

export { useTravelDataContext, TravelContextProvider };
