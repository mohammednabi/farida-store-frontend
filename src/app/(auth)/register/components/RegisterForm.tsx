"use client";
import { Button, Divider, Input } from "@nextui-org/react";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import GoogleProvider from "../../GoogleProvider";
import { redirect } from "next/navigation";
import { StoreContext } from "@/contexts/StoreContext";
import { observer } from "mobx-react-lite";
import Cookies from "js-cookie";

const RegisterForm = () => {
  const { registerForm } = useContext(StoreContext);

  useEffect(() => {
    registerForm.setDisabledCondition(
      registerForm.isValidEmail &&
        registerForm.isValidPassword &&
        registerForm.email.length > 0 &&
        registerForm.password.length > 0 &&
        registerForm.confirmedPassword.length > 0 &&
        registerForm.firstName.length > 0 &&
        registerForm.lastName.length > 0 &&
        registerForm.username.length > 0 &&
        registerForm.password === registerForm.confirmedPassword
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    registerForm.isValidEmail,
    registerForm.isValidPassword,
    registerForm.email,
    registerForm.password,
    registerForm.confirmedPassword,
    registerForm.firstName,
    registerForm.lastName,
    registerForm.username,
  ]);

  useEffect(() => {
    if (Cookies.get("credentials")) {
      redirect("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerForm.isLoading]);

  return (
    <div className="w-full flex flex-col p-5 px-20 items-start gap-10">
      <h1 className="text-3xl font-bold capitalize">Register</h1>
      <form className="w-1/3 flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-2">
          <Input
            value={registerForm.firstName}
            variant="bordered"
            isRequired
            type="text"
            label="First Name"
            labelPlacement="outside"
            placeholder=" First  "
            radius="none"
            size="lg"
            onChange={(e) => {
              registerForm.setFirstName(e.target.value);
            }}
          />

          <Input
            value={registerForm.lastName}
            variant="bordered"
            type="text"
            label="Last Name"
            labelPlacement="outside"
            placeholder=" Last "
            radius="none"
            size="lg"
            isRequired
            onChange={(e) => {
              registerForm.setlastName(e.target.value);
            }}
          />
        </div>

        <Input
          value={registerForm.username}
          variant="bordered"
          isRequired
          type="text"
          label="Username"
          labelPlacement="outside"
          placeholder=" Username  "
          radius="none"
          size="lg"
          onChange={(e) => {
            registerForm.setUsername(e.target.value);
          }}
        />

        <Input
          value={registerForm.email}
          variant="bordered"
          isInvalid={!registerForm.isValidEmail}
          color={!registerForm.isValidEmail ? "danger" : "success"}
          isRequired
          type="email"
          label="Email"
          labelPlacement="outside"
          placeholder="Enter your email"
          errorMessage={!registerForm.isValidEmail && "Not valid email"}
          radius="none"
          size="lg"
          onChange={(e) => {
            registerForm.setEmail(e.target.value);
            registerForm.validateEmail();
          }}
        />
        <Input
          value={registerForm.password}
          variant="bordered"
          isRequired
          type={!registerForm.isPasswordVisible ? "password" : "text"}
          label="Password"
          labelPlacement="outside"
          placeholder="Enter your password"
          radius="none"
          size="lg"
          description={
            !registerForm.isValidPassword
              ? "Password must have  (1-6) letters includes at least one number and one uppercase letter  "
              : ""
          }
          onChange={(e) => {
            registerForm.setPassword(e.target.value);
            registerForm.validatePassword();
          }}
          endContent={
            <div
              className="cursor-pointer"
              onMouseDown={() => {
                registerForm.setIsPasswordVisible(true);
              }}
              onMouseUp={() => {
                registerForm.setIsPasswordVisible(false);
              }}
            >
              {!registerForm.isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
            </div>
          }
        />

        <Input
          value={registerForm.confirmedPassword}
          variant="bordered"
          isRequired
          type={!registerForm.isConfirmedPasswordVisible ? "password" : "text"}
          label="Confirm Password"
          labelPlacement="outside"
          placeholder="Confirm your password"
          radius="none"
          size="lg"
          color={
            registerForm.confirmedPassword !== registerForm.password
              ? "danger"
              : "success"
          }
          errorMessage={
            registerForm.confirmedPassword !== registerForm.password
              ? "Not the same password"
              : ""
          }
          onChange={(e) => {
            registerForm.setConfirmedPassword(e.target.value);
          }}
          endContent={
            <div
              className="cursor-pointer"
              onMouseDown={() => {
                registerForm.setIsConfirmedPasswordVisible(true);
              }}
              onMouseUp={() => {
                registerForm.setIsConfirmedPasswordVisible(true);
              }}
            >
              {!registerForm.isConfirmedPasswordVisible ? (
                <FaEye />
              ) : (
                <FaEyeSlash />
              )}
            </div>
          }
        />

        <div className="grid grid-cols-2 items-center gap-2">
          <Button
            isLoading={registerForm.isLoading}
            isDisabled={!registerForm.disabledCondition}
            type="submit"
            radius="none"
            className={`${
              !registerForm.disabledCondition ? "bg-stone-400" : "bg-mainBlack"
            } text-mainWhite `}
            onClick={(e) => {
              // registerWithEmailAndPass(e)

              registerForm.strapiRegister();
            }}
          >
            Submit
          </Button>
          {/* <h1 className='text-red-400'>{errorMessage.slice(22,errorMessage.length-2) }</h1> */}
          <h1 className="text-red-400">{registerForm.errorMessage}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-mainBlack/50 underline">
            Already have an account ?
          </h1>
          <Link href={"/login"} className="text-blue-500">
            login
          </Link>
        </div>
      </form>

      <div className="w-1/3 grid grid-cols-[1fr_auto_1fr] justify-between items-center">
        <Divider />
        <h1 className="text-lg capitalize px-5">or</h1>
        <Divider />
      </div>
      <GoogleProvider />
    </div>
  );
};

export default observer(RegisterForm);
