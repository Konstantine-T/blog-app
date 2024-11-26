import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type ProfileFormData = {
  fullNameGeo: string;
  fullName: string;
  phoneNumber: string;
  avatarUrl: string;
};

const Profile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userToken")) {
      navigate("/login");
    }
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { isDirty, isSubmitting },
  } = useForm<ProfileFormData>({
    defaultValues: {
      fullNameGeo: "ჯონ დოუ",
      fullName: "John Doe",
      phoneNumber: "123-456-7890",
      avatarUrl: "https://via.placeholder.com/150",
    },
  });

  const avatarUrl = watch("avatarUrl");

  const onSubmit = (data: ProfileFormData) => {
    console.log("Profile data saved:", data);
    reset(data);
  };

  const handleCancel = () => {
    reset();
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 p-6 border rounded-lg shadow-lg bg-card">
      <h1 className="text-2xl font-bold text-center mb-6">User Profile</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label
            htmlFor="fullNameGeo"
            className="block text-sm font-medium text-muted-foreground"
          >
            Full Name (Geo)
          </label>
          <Input
            type="text"
            id="fullNameGeo"
            {...register("fullNameGeo", {
              required: "Full Name (Geo) is required",
            })}
            className="mt-1"
          />
        </div>
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
            {...register("fullName", {
              required: "Full Name is required",
              minLength: {
                value: 6,
                message: "Full Name must be at least 6 characters",
              },
            })}
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
            {...register("phoneNumber", {
              required: "Phone Number is required",
            })}
            className="mt-1"
          />
        </div>
        <div>
          <label
            htmlFor="avatarUrl"
            className="block text-sm font-medium text-muted-foreground"
          >
            Avatar URL
          </label>
          <Input
            type="url"
            id="avatarUrl"
            {...register("avatarUrl", { required: "Avatar URL is required" })}
            className="mt-1"
          />
          {avatarUrl && (
            <div className="mt-4">
              <img
                src={avatarUrl}
                alt="User Avatar"
                className="rounded-full w-20 h-20 object-cover"
              />
            </div>
          )}
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <Button
            variant="secondary"
            type="button"
            onClick={handleCancel}
            disabled={!isDirty}
          >
            Cancel
          </Button>
          <Button type="submit" variant="default" disabled={isSubmitting}>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
