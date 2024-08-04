import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = (props) => {
    const [user, setUser] = React.useState('')
    return(
        <UserContext.Provider value={{user, setUser}}>
        {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;