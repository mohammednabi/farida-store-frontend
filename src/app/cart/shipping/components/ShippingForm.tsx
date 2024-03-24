"use client";
import { StoreContext } from "@/contexts/StoreContext";
import {
  Accordion,
  AccordionItem,
  Button,
  Input,
  Textarea,
} from "@nextui-org/react";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { MdOutlineDiscount } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddressSelectionModal from "../../confirmation/components/AddressSelectionModal";
import CustomizedInput from "../components/CustomizedInput";
import { useScreenSize } from "react-screen-size-helper";

const ShippingForm = () => {
  const { handleSubmit, register, reset, setValue } = useForm();
  const { currentWidth } = useScreenSize({});
  const { user, cart, userOrders, selectionAddressModal, userAddresses } =
    useContext(StoreContext);
  const router = useRouter();

  const goToConfirmationOrderPage = (orderNumber: string | number) => {
    router.push(`/cart/confirmation?order_number=${orderNumber}`);
  };

  const setSelectedAddressValues = () => {
    setValue("phone", userAddresses.selectedUserAddress.phone);
    setValue("second_phone", userAddresses.selectedUserAddress.second_phone);
    setValue("state", userAddresses.selectedUserAddress.state);
    setValue("country", userAddresses.selectedUserAddress.country);
    setValue("city", userAddresses.selectedUserAddress.city);
    setValue("street", userAddresses.selectedUserAddress.street);
    setValue("postal", userAddresses.selectedUserAddress.postal_code);
  };

  const submitForm = (data: FieldValues) => {
    userOrders.setIsCreatingOrderLoading = true;

    const userOrderDetailData = {
      totalPrice: Number((cart.totalPrice + 100).toFixed(2)),
      userPaymentId: null,
      userId: user.strapiUserdata.id.toString(),

      orderNotes: data.notes,
      orderAddress: {
        street: data.street,
        state: data.state,
        city: data.city,
        country: data.country,
        postal_code: data.postal,
        phone: data.phone,
        second_phone: data.second_phone,
      },
      // orderItemsIds: userOrders.orderItems,
    };

    userOrders.createNewOrder(userOrderDetailData).then((data) => {
      if (data) {
        userOrders
          .createOrderItemsFromCart(cart.userCartItems, data.data.id)
          .then(() => {
            user.clearUserCart(cart.userCartItems).then(() => {
              toast.success("order created");
              userOrders.setIsCreatingOrderLoading = false;
              goToConfirmationOrderPage(data.data.id);
            });
          })
          .catch((err) => {
            toast.error(`order failed : ${err.message}`);
          });
      }
    });

    reset();
  };

  useEffect(() => {
    userAddresses.getAllUserAddresses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (userAddresses.selectedUserAddress.id) {
      setSelectedAddressValues();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAddresses.selectedUserAddress.id]);

  return (
    <div className="flex flex-col ">
      <h1 className="text-lg md:text-2xl font-bold capitalize">
        order details
      </h1>

      <Accordion variant="bordered" className="mt-10">
        <AccordionItem
          title="Promo Code"
          subtitle="Do you have promo code? press here"
          indicator={<MdOutlineDiscount className="text-sm md:text-lg" />}
          classNames={{
            subtitle: "text-mainPink",
            indicator: "text-sm md:text-2xl text-mainPink",
          }}
        >
          <h1 className="text-sm md:text-2xl capitalize pb-5">
            if you have promo code use it here{" "}
          </h1>
          <div className="flex flex-wrap items-center gap-5">
            <Input
              labelPlacement="outside"
              inputMode="text"
              radius="sm"
              size={currentWidth > 768 ? "md" : "sm"}
              isRequired
              classNames={{
                label: "text-xs md:text-xl capitalize font-bold ",
              }}
            />

            <Button
              size={currentWidth > 768 ? "md" : "sm"}
              className="bg-mainBlack text-mainWhite px-5 py-2"
            >
              use code
            </Button>
          </div>
        </AccordionItem>
      </Accordion>

      {userAddresses.userAddresses.length > 0 && (
        <Button
          radius="none"
          className="bg-mainBlack text-mainWhite text-sm md:text-xl mt-10 capitalize"
          onPress={selectionAddressModal.onOpen}
        >
          select from your addresses
        </Button>
      )}

      <AddressSelectionModal />

      <form
        onSubmit={handleSubmit((data) => {
          submitForm(data);
        })}
        className="mt-10   flex flex-col gap-5 "
      >
        <div className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 items-center gap-5">
          <CustomizedInput
            formHookRegister={register("phone")}
            label="phone"
            labelPlacement="top"
            type="tel"
            inputMode="tel"
            placeholder="phone number"
            required
          />

          <CustomizedInput
            formHookRegister={register("second_phone")}
            label={"another phone "}
            labelPlacement="top"
            type="tel"
            inputMode="tel"
            placeholder="another phone number"
          />
        </div>

        <CustomizedInput
          formHookRegister={register("state")}
          label={"state "}
          labelPlacement="top"
          type="text"
          inputMode="text"
          placeholder="pick your state"
          required
        />

        <CustomizedInput
          formHookRegister={register("country")}
          label={"country "}
          labelPlacement="top"
          type="text"
          inputMode="text"
          placeholder="your country"
          required
        />

        <CustomizedInput
          formHookRegister={register("city")}
          label={"city "}
          labelPlacement="top"
          type="text"
          inputMode="text"
          placeholder="your city"
          required
        />

        <CustomizedInput
          formHookRegister={register("street")}
          label={"street "}
          labelPlacement="top"
          type="text"
          inputMode="text"
          placeholder="your street"
          required
        />

        <CustomizedInput
          formHookRegister={register("postal")}
          label={"postal code "}
          labelPlacement="top"
          type="text"
          inputMode="text"
          placeholder="postal code of your address"
          required
        />

        <div className="flex flex-col pt-10 gap-5">
          <div>
            <h1 className="text-lg md:text-2xl font-bold capitalize">
              more information
            </h1>
            <h1 className="text-sm md:text-xl text-mainBlack/50 capitalize">
              Order notes (optional)
            </h1>
          </div>

          <div>
            <Textarea
              {...register("notes")}
              variant="bordered"
              radius="none"
              placeholder="If you have any notes about your order, write it here "
              minRows={currentWidth > 768 ? 20 : 10}
            />
          </div>
        </div>

        <Button
          size={currentWidth > 768 ? "md" : "sm"}
          className="bg-mainBlack text-mainWhite capitalize "
          type="submit"
        >
          complete your order
        </Button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default observer(ShippingForm);
