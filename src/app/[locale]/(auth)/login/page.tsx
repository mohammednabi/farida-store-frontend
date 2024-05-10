"use client";
import React from "react";

import LoginForm from "./components/LoginForm";
import PageTitle from "@/components/PageTitle";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

interface LoginPageProps {
  params: { locale: string };
}

const LoginPage = ({ params: { locale } }: LoginPageProps) => {
  // unstable_setRequestLocale(locale);
  const t = useTranslations("loginForm");

  return (
    <div className="w-full h-auto">
      <PageTitle title={t("login")} />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
