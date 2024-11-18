"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
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
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" required />
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
