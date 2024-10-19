import React,{useState,useContext,createContext} from "react";


// Auth context 
export const AuthContext =createContext();


// Hook for use this useAuth
export const useAuth =()=>{
  return useContext(AuthContext)
}


// Main content and functionality , wrap this with main app
export const AuthContextProvider =({children})=>{
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('userInfo')));
    const [loading, setLoading] = useState(false);


  return <AuthContext.Provider value={{authUser,setAuthUser,loading, setLoading}} >
    {children}
  </AuthContext.Provider>
}