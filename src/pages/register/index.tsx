"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { register } from "@/supabase/auth";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [registerPayload, setRegisterPayload] = useState({
    email: "",
    password: "",
  });

  const { mutate: handleRegister } = useMutation({
    mutationKey: ["register"],
    mutationFn: register,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (registerPayload.email && registerPayload.password) {
      handleRegister(registerPayload);
      navigate("/");
    }
  };
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="rounded-xl border bg-card text-card-foreground shadow w-full max-w-md mx-auto">
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="tracking-tight text-2xl font-bold text-center">
            Sign Up for BitBlogs
          </div>
          <div className="text-sm text-muted-foreground text-center">
            Create your account to start blogging
          </div>
        </div>
        <div className="p-6 pt-0">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="john@example.com"
                required
                value={registerPayload.email}
                onChange={(e) => {
                  setRegisterPayload({
                    email: e.target.value,
                    password: registerPayload.password,
                  });
                }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                required
                value={registerPayload.password}
                onChange={(e) => {
                  setRegisterPayload({
                    email: registerPayload.email,
                    password: e.target.value,
                  });
                }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input type="password" id="confirm-password" required />
            </div>
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
        </div>
        <div className="items-center p-6 pt-0 flex justify-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <a className="text-primary hover:underline" href="/login">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
