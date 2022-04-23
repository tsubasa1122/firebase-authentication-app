import { FirebaseApp, getApp } from "firebase/app";
import type { NextPage } from "next";
import { SignInForm } from "../components/SignInform";

const Login: NextPage = () => {
  const app: FirebaseApp = getApp();
  return (
    <div>
      login
      {app.name}
      <SignInForm />
    </div>
  );
};

export default Login;
