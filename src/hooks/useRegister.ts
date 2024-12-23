import { useMutation } from "@tanstack/react-query";
import { register } from "@/supabase/auth";

const useRegister = () => {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: register,
  });
};

export default useRegister;
