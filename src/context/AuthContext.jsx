import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const nav = useNavigate();
  const [onChange, setOnChange] = useState(false);
  const [currentuser, setCurrentUser] = useState();

  // Helper to parse JSON safely
  const parseJSON = async (response) => {
    try {
      return await response.json();
    } catch (error) {
      return null; // Return null if the response is not JSON
    }
  };

  const login = (email, password) => {
    fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then(parseJSON)
      .then((response) => {
        console.log(response);
        if (response?.error) {
          Swal.fire("Error", response.error, "error");
        } else if (response?.success) {
          nav("/homepage");
          Swal.fire("Success", response.success, "success");
          setOnChange(!onChange);
        } else {
          Swal.fire("Error", "Something went wrong", "error");
        }
      })
      .catch((error) => {
        Swal.fire("Error", "Failed to log in. Please try again.", "error");
        console.error("Login error:", error);
      });
  };

  // signup
  const signup = (username, email, password) => {
    fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    })
      .then(parseJSON)
      .then((response) => {
        console.log(response);
        if (response?.error) {
          Swal.fire("Error", response.error, "error");
        } else if (response?.success) {
          nav("/login");
          Swal.fire("Success", response.success, "success");
          setOnChange(!onChange);
        } else {
          Swal.fire("Error", "Something went wrong", "error");
        }
      })
      .catch((error) => {
        Swal.fire("Error", "Failed to sign up. Please try again.", "error");
        console.error("Signup error:", error);
      });
  };

  // Logout
  const logout = () => {
    fetch("/api/auth/logout", {
      method: "DELETE",
    })
      .then(parseJSON)
      .then(() => {
        setCurrentUser();
        setOnChange(!onChange);
        nav("/about");
      })
      .catch((error) => {
        Swal.fire("Error", "Failed to log out. Please try again.", "error");
        console.error("Logout error:", error);
      });
  };

  // fetch current user
  useEffect(() => {
    fetch("/api/current_user", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(parseJSON)
      .then((data) => {
        if (data) {
          setCurrentUser(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching current user:", error);
      });
  }, [onChange]);

  const contextData = {
    login,
    signup,
    logout,
    currentuser,
  };

  return (
    <div>
      <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
    </div>
  );
}
