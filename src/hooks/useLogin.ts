import { useMutation } from "@tanstack/react-query";
import { login } from "@/supabase/auth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";

interface LoginData {
  email: string;
  password: string;
}

export const useLogin = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: (res) => {
      if (!res?.error) {
        const token = res.data.session.access_token;
        localStorage.setItem("userToken", token);

        if (res.data.user?.email) {
          userContext?.setUser({ email: res.data.user?.email });
          navigate("/");
          return;
        }
      }
      console.error("something went wrong my man");
    },
  });

  return mutation;
};
