import React, { useEffect, createContext, useState, useContext } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [initializing, setInitializing] = useState(true);
  // const [error, setError] = useState(null);

  const checkUser = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API}checkUser`,
        {
          credentials: "include",
          withCredentials: true,
        }
      );
      const json = await res.json();
      const fetchedUser = json?.data?.data;

      if (fetchedUser._id) {
        setUser(json.data.data);
        setInitializing(false);
      } else {
        setUser(null);
        setInitializing(false);
      }
    } catch (err) {
      setUser(null);
      setInitializing(false);
    }
  };

  useEffect(() => {
    checkUser();
  }, [initializing]);

  return (
    <AuthContext.Provider value={{ user, initializing }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider };
