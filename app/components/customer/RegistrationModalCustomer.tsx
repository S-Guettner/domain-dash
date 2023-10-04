"use client";
import { FC, useState } from "react";

import {
  signIn,
  signOut,
  useSession,
  getProviders,
  ClientSafeProvider,
  LiteralUnion,
} from "next-auth/react";

interface RegistrationModalCustomerProps {}

const registrationModalCustomer: FC<RegistrationModalCustomerProps> = ({}) => {
  
  const customSignIn = async (provider: string, callbackUrl: string) => {
    return await signIn(provider, { callbackUrl });
  };

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const showSVG = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12,9c-1.642,0-3,1.359-3,3c0,1.642,1.358,3,3,3c1.641,0,3-1.358,3-3C15,10.359,13.641,9,12,9z"></path>
      <path d="M12,5c-7.633,0-9.927,6.617-9.948,6.684L1.946,12l0.105,0.316C2.073,12.383,4.367,19,12,19s9.927-6.617,9.948-6.684 L22.054,12l-0.105-0.316C21.927,11.617,19.633,5,12,5z M12,17c-5.351,0-7.424-3.846-7.926-5C4.578,10.842,6.652,7,12,7 c5.351,0,7.424,3.846,7.926,5C19.422,13.158,17.348,17,12,17z"></path>
    </svg>
  );
  const hideSVG = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757C12.568 16.983 12.291 17 12 17c-5.351 0-7.424-3.846-7.926-5 .204-.47.674-1.381 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379-.069.205-.069.428 0 .633C2.073 12.383 4.367 19 12 19zM12 5c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657.069-.205.069-.428 0-.633C21.927 11.617 19.633 5 12 5zM16.972 15.558l-2.28-2.28C14.882 12.888 15 12.459 15 12c0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L8.915 7.501C9.796 7.193 10.814 7 12 7c5.351 0 7.424 3.846 7.926 5C19.624 12.692 18.76 14.342 16.972 15.558z"></path>
    </svg>
  );
  const googleSVG = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 48 48"
      enableBackground="new 0 0 48 48"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      ></path>
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      ></path>
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      ></path>
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      ></path>
    </svg>
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleSignIn = async (e: any) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email: email,
      password: password,
      callbackUrl: "http://localhost:3000/dashboard/",
      
    });
  };

  return (
    <main className="text-black border w-1/3 h-2/3">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="block border"
          type="text"
          name="email"
          id="email"
        />

        <section className="flex">
          <div>
            <label htmlFor="password ">Passwort</label>
            <input
            onChange={(e) => setPassword(e.target.value)}
              className="block border"
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
            />

            <label htmlFor="passwordCheck ">Passwort wiederholen</label>
            <input
              className="block border"
              type={showPassword ? "text" : "password"}
              name="passwordCheck"
              id="passwordCheck"
            />
          </div>
          <button
            className="m-2 w-full flex justify-center "
            onClick={() => setShowPassword((prev) => !prev)}
          >
            <div className="">{showPassword ? hideSVG : showSVG}</div>
          </button>
        </section>
        <button onClick={handleSignIn} className="border p-2 rounded-2xl m-5">
          Registrieren
        </button>
      </form>
      <section className="text-center">
        <p>Oder</p>
      </section>
      <section>
        <button
          onClick={() =>
            customSignIn("google", "http://localhost:3000/dashboard")
          }
        >
          <div className="flex gap-3 items-center border p-2 my-4">
            <p>Registrieren mit Google</p>
            {googleSVG}
          </div>
        </button>
      </section>
    </main>
  );
};

export default registrationModalCustomer;
