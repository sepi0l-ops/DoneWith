import React, { createContext, useEffect, useState } from 'react'
import { getUserData } from '../utility/storage';

const AuthContext = createContext();

// export const UserProvider = ({ children }) => {
//     // const [user, setUser] = useState(null)

//     // const loadUserData = async () => {
//     //     const userData = await getUserData()
//     //     if (userData) {
//     //         setUser(userData.user)
//     //     }
//     // }

//     // useEffect(() => {
//     //     loadUserData()
//     // }, [])

//     return (
//         <AuthContext.Provider value={{ user, setUser }}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

export default AuthContext
