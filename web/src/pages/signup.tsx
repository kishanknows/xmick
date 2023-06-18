import { useRouter } from "next/router";
import { InputField } from "../../components";
import { useState } from "react";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="flex h-screen bg-black">
      <div className="bg-gray-700 p-6 rounded-md m-auto min-w-[350px]">
        <div className="place-items-center">
          <p className="text-slate-400 text-xs text-center">WELCOME</p>
          <p className="text-lg font-semibold text-center">Create an account</p>
        </div>
        <InputField
          title="Email"
          value={email}
          setValue={setEmail}
          placeholder="Enter your email"
        />
        <InputField
          title="Username"
          value={username}
          setValue={setUsername}
          placeholder="Enter your username"
        />
        <InputField
          title="Password"
          value={password}
          setValue={setPassword}
          type="password"
          placeholder="Enter your password"
        />
        <InputField
          title="Confirm Password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          type="password"
          placeholder="Re-enter your password"
        />
        <div className="place-items-center bg-blue-500 text-center mt-7 p-2 rounded text-sm hover:shadow-xl cursor-pointer">
          Sign Up
        </div>
        <div className="mt-2">
          <span className="text-[11px] text-slate-400">
            Already have an account?
          </span>
          <span
            className="text-[11px] ml-1 cursor-pointer"
            onClick={() => router.replace("/")}
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
}
