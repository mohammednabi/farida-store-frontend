import React from "react";

import RegisterForm from "./components/RegisterForm";
import PageTitle from "@/components/PageTitle";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

interface RegisterPageProps {
  params: { locale: string };
}

const RegisterPage = ({ params: { locale } }: RegisterPageProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("registerForm");
  return (
    <div className="w-full h-auto">
      <PageTitle title={t("register")} />
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
