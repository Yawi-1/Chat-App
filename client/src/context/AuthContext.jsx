import React, { useState, useContext, createContext } from "react";

// Auth context 
export const AuthContext = createContext();

// Hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// Main context provider, wrap this around the main app
export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('userInfo')));
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);  // Stores search result
  const [searchInput, setSearchInput] = useState("");      // Handles user input

  // Fetch all users
  const token = authUser?.token;
  const getAllUsers = async () => {
    try {
      const res = await fetch('http://localhost:8000/api/users/all', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${token}`
        },
        method: 'GET',
        credentials: 'include'
      });
      const data = await res.json();
      setConversations(data); // All users data
      setFilteredUsers(data);  // Initially, filteredUsers shows all conversations
    } catch (error) {
      console.error(error);
    }
  };

  // Search user by name, triggered by clicking the search button
  const searchUser = (e) => {
    e.preventDefault();
    if (searchInput.trim() === "") {
      setFilteredUsers(conversations);  // Show all if search is empty
    } else {
      const lowercasedInput = searchInput.toLowerCase();
      setFilteredUsers(conversations.filter((item) => {
        return item.username.toLowerCase().includes(lowercasedInput);
      }));
    }
  };

  function clearInput(){
    setSearchInput("");
    setFilteredUsers(conversations);
  }


  // Select a chat of single user...
  const [chatSelected,setSelectedChat] = useState(false);

  return (
    <AuthContext.Provider value={{ 
      authUser, 
      setAuthUser, 
      loading, 
      setLoading, 
      searchInput, 
      setSearchInput, 
      getAllUsers, 
      conversations, 
      searchUser, 
      filteredUsers ,
      clearInput,
      chatSelected,
      setSelectedChat
    }}>
      {children}
    </AuthContext.Provider>
  );
}
