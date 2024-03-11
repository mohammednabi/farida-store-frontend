"use client";
import CustomizedInput from "@/app/cart/shipping/components/CustomizedInput";
import { StoreContext } from "@/contexts/StoreContext";
import { Button } from "@nextui-org/react";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ModalDataContainer = () => {
  const { register, setValue, handleSubmit } = useForm();
  const { user } = useContext(StoreContext);
  const [loading, setLoading] = useState(false);
  const { profileModal } = useContext(StoreContext);

  const setFormValues = () => {
    setValue("username", user.strapiUserdata.username);
    setValue("email", user.strapiUserdata.email);
    setValue("first_name", user.strapiUserdata.first_name);
    setValue("last_name", user.strapiUserdata.last_name);
  };

  const updateTheUserData = (data: FieldValues) => {
    setLoading(true);
    const newData: {
      username: string;
      email: string;
      firstName: string;
      lastName: string;
    } = {
      username: data.username,
      email: data.email,
      firstName: data.first_name,
      lastName: data.last_name,
    };
    user
      .updateUserData(newData)
      .then(() => {
        toast.success("updated successfully");
        // profileModal.onClose();
      })
      .catch((err) => {
        toast.error("failed to update");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setFormValues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.strapiUserdata.updatedAt]);

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          updateTheUserData(data);
        })}
        className="flex flex-col gap-3"
      >
        <CustomizedInput
          formHookRegister={register("username")}
          label="username :"
        />
        <CustomizedInput formHookRegister={register("email")} label="email :" />
        <CustomizedInput
          formHookRegister={register("first_name")}
          label="first name :"
        />
        <CustomizedInput
          formHookRegister={register("last_name")}
          label="last name :"
        />
        <Button
          type="submit"
          className="bg-mainBlack text-mainWhite text-xl capitalize"
          radius="none"
          isLoading={loading}
          isDisabled={loading}
        >
          save
        </Button>
      </form>
      <ToastContainer />
    </>
  );
};

export default observer(ModalDataContainer);
