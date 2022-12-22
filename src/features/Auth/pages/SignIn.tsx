import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("./home");
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };

  return (
    <div className="w-screen h-screen absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-sky">
      <div className="flex flex-col bg-slate-300 py-20 px-12 rounded-md">
        <input
          type={"email"}
          className="text-base border border-solid border-opacity-70 h-8 min-w-[280px] my-2 px-2 rounded-md"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type={"password"}
          className="text-base border border-solid border-opacity-70 h-8 min-w-[280px] my-2 px-2 rounded-md"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="text-base bg-blue-500 rounded-md min-w-[280px] h-8 my-2"
          onClick={signUp}
        >
          Create Account
        </button>
        <button
          className="text-base bg-blue-500 rounded-md h-8 min-w-[280px] my-2"
          onClick={signIn}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
