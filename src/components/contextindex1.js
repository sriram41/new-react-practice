import React from "react";

// Initial data
const initialdata = [
  { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz" },
  { id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv" }
];

// Create the userContext
export const userContext = React.createContext();

// Rename `userContextProvider` to `UserContextProvider`
export const UserContextProvider = ({ children }) => {
  return (
    <userContext.Provider value={initialdata}>
      {children}
    </userContext.Provider>
  );
};
