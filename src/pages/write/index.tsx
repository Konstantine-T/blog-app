import { useEffect } from "react";
import { ProfileForm } from "./components/form/Form";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userToken")) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <ProfileForm />
    </>
  );
};

export default Write;
