import React from "react";

import LoginForm from "./components/LoginForm";
import PageTitle from "@/components/PageTitle";

const LoginPage = () => {
  return (
    <div className="w-full h-auto">
      <PageTitle title="login" />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
