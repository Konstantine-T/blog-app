"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/supabase/auth";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [loginPayload, setLoginPayload] = useState({
    email: "",
    password: "",
  });

  const { mutate: handleLogin } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("I work");
    if (loginPayload.email && loginPayload.password) {
      handleLogin(loginPayload);
      console.log("logged in mother fucker");
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="rounded-xl border bg-card text-card-foreground shadow w-full max-w-md mx-auto">
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="tracking-tight text-2xl font-bold text-center">
            Log in to BitBlogs
          </div>
          <div className="text-sm text-muted-foreground text-center">
            Enter your credentials to access your account
          </div>
        </div>
        <div className="p-6 pt-0">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="john@example.com"
                required
                value={loginPayload.email}
                onChange={(e) => {
                  setLoginPayload({
                    email: e.target.value,
                    password: loginPayload.password,
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
                value={loginPayload.password}
                onChange={(e) => {
                  setLoginPayload({
                    email: loginPayload.email,
                    password: e.target.value,
                  });
                }}
              />
            </div>
            <Button type="submit" className="w-full">
              Log In
            </Button>
          </form>
        </div>
        <div className="items-center p-6 pt-0 flex justify-between">
          <a
            className="text-sm text-primary hover:underline"
            href="/forgot-password"
          >
            Forgot password?
          </a>
          <p className="text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <a className="text-primary hover:underline" href="/register">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
