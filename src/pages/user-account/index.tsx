import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userToken")) {
      navigate("/login");
    }
  }, []);

  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "John Doe",
    phoneNumber: "123-456-7890",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
    });
    setIsEditing(false);
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 p-6 border rounded-lg shadow-lg bg-card">
      <h1 className="text-2xl font-bold text-center mb-6">User Profile</h1>

      <div className="space-y-6">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-muted-foreground"
          >
            Full Name
          </label>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            disabled={!isEditing}
            onChange={handleInputChange}
            className="mt-1"
          />
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-muted-foreground"
          >
            Phone Number
          </label>
          <Input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            disabled={!isEditing}
            onChange={handleInputChange}
            className="mt-1"
          />
        </div>
      </div>
      <div className="mt-6 flex justify-end space-x-4">
        {isEditing ? (
          <>
            <Button variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="default" onClick={handleSave}>
              Save
            </Button>
          </>
        ) : (
          <Button onClick={() => setIsEditing(true)}>Edit</Button>
        )}
      </div>
    </div>
  );
};

export default Profile;
