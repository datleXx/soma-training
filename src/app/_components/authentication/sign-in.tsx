"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, Divider, TextInput, Button } from "@tremor/react";
import { RiGoogleFill } from "react-icons/ri";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<{ email?: string; password?: string }>({});
  const router = useRouter();

  const signInSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(1, "Password is required"),
  });

  const googleSignIn = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = signInSchema.safeParse({ email, password });

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setError({
        email: fieldErrors.email?.[0],
        password: fieldErrors.password?.[0],
      });
      return;
    }
  };

  return (
    <Card className="fixed inset-0 bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-8 rounded bg-white p-8 shadow-md">
        <div className="flex justify-center">
          <Image
            src="https://www.somaportal.com/gray-logo.svg"
            alt="Logo"
            width={70}
            height={70}
          />
        </div>
        <h2 className="text-center text-2xl font-bold">
          Sign in to your account
        </h2>
        <form className="mt-8 space-y-6">
          <div className="space-y-3 rounded-md shadow-sm">
            <div className="space-y-1">
              <div className="text-sm font-medium text-gray-600">
                Email address
              </div>
              <TextInput
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full rounded-t-md border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error.email && (
                <p className="mt-2 text-sm text-red-600">{error.email}</p>
              )}
            </div>
            <div className="space-y-1">
              <div className="text-sm font-medium text-gray-600">Password</div>
              <TextInput
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full rounded-b-md border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error.password && (
                <p className="mt-2 text-sm text-red-600">{error.password}</p>
              )}
            </div>
          </div>

          <div>
            <Button
              onClick={() => handleSignIn}
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Log in
            </Button>
          </div>
          <Divider>Or continue with</Divider>
          <div>
            <Button
              onClick={googleSignIn}
              type="submit"
              icon={RiGoogleFill}
              className="w-full border-none bg-[#4285F4] hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50"
            >
              Google
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot Password?
              </a>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign Up
              </a>
            </div>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default SignInPage;
