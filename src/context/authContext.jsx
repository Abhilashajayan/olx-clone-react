import { createContext, useContext, useState ,useEffect } from "react";
import { signOut,  signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth  } from "../config/firebase";


const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({})


  const navigate = useNavigate();
  console.log(isLoggedIn);

  const login = async (email, password) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
        setUser(currentUser)
    })
    return () => {
        unsubscribe();
    }
})
  
  return (
    <AuthContext.Provider
      value={{
        
        setIsLoggedIn,
        login,
        logout,
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
    return useContext(AuthContext)
}