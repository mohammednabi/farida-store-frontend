"use client";
import { Button, Input, Textarea } from "@nextui-org/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useScreenSize } from "react-screen-size-helper";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const ComplaintForm = () => {
  const { currentWidth } = useScreenSize({});
  const { register, handleSubmit } = useForm();

  const submitcomplaint = () => {
    toast("your complaint was send");
  };

  return (
    <div className="w-full px-5 medmob:px-10 lmob:px-20  md:px-28 flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl md:text-4xl font-bold capitalize">
          Do you have a complaint or inquiry?
        </h1>
        <h1 className="text-sm md:text-xl text-mainBlack/50 capitalize">
          Please do not hesitate to call or write to us to help you
        </h1>
      </div>

      <form
        onSubmit={handleSubmit((data) => {
          submitcomplaint();
          console.log({ data });
        })}
        className="w-full flex flex-col gap-5"
      >
        <Input
          {...register("name")}
          isRequired
          label="Name"
          placeholder="Your name"
          labelPlacement="outside"
          variant="bordered"
          radius="none"
          type="text"
          inputMode="text"
          size={currentWidth > 768 ? "lg" : "md"}
          className="w-full "
        />
        <Input
          {...register("email")}
          isRequired
          label="Email"
          placeholder="Your email"
          labelPlacement="outside"
          variant="bordered"
          radius="none"
          type="email"
          inputMode="email"
          size={currentWidth > 768 ? "lg" : "md"}
          className="w-full "
        />
        <Textarea
          {...register("message")}
          isRequired
          minRows={20}
          label="Message"
          placeholder="Your message"
          labelPlacement="outside"
          variant="bordered"
          radius="none"
          type="text"
          inputMode="text"
          size={currentWidth > 768 ? "lg" : "md"}
          className="w-full "
        />
        <Button
          radius="none"
          type="submit"
          size={currentWidth > 768 ? "lg" : "md"}
          className="bg-mainBlack text-mainWhite text-sm md:text-xl"
        >
          Send
        </Button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ComplaintForm;
