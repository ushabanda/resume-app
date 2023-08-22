import React, { useState, createContext } from "react";

export let Usercontext = createContext();

function UsercontextApi({ children }) {
  // let [user,setuser]=useState(
  //     {
  //         userLoggedIn:true,
  //         username:"usha"
  //     }
  // );
  return (
    <div>
      <Usercontext.Provider value="usha">{children}</Usercontext.Provider>
    </div>
  );
}
export default UsercontextApi;
