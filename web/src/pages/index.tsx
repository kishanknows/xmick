import { useRouter } from "next/router";
import { useState } from "react";
import { InputField } from "../../components";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <div className="flex h-screen bg-black">
      <div className="bg-gray-700 p-6 rounded-md m-auto min-w-[350px]">
        <div className="place-items-center">
          <p className="text-slate-400 text-xs text-center">WELCOME BACK</p>
          <p className="text-lg font-semibold text-center">
            Log into your account
          </p>
        </div>
        <InputField
          title="Email"
          value={email}
          setValue={setEmail}
          placeholder="Enter your email"
        />
        <div className="mt-5 flex flex-row justify-between">
          <span className="text-xs">Password</span>
          <span className="text-[10px] text-slate-400 cursor-pointer">
            Forgot password?
          </span>
        </div>
        <input
          className="bg-transparent min-w-full border-[0.5px] rounded border-gray-500 mt-1 p-2 text-xs"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        ></input>
        <div className="place-items-center bg-blue-500 text-center mt-7 p-2 rounded text-sm hover:shadow-xl cursor-pointer">
          Login now
        </div>
        <div className="mt-2">
          <span className="text-[11px] text-slate-400">
            Not registered yet?
          </span>
          <span
            className="text-[11px] ml-1 cursor-pointer"
            onClick={() => router.push("/signup")}
          >
            Register
          </span>
        </div>
      </div>
    </div>
  );
}
