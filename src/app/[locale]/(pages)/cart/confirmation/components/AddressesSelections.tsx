"use client";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import UserAddressSelection from "./UserAddressSelection";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  Pagination,
  Navigation,
  A11y,
  EffectFade,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import { StoreContext } from "@/contexts/StoreContext";

const AddressesSelections = () => {
  const { userAddresses } = useContext(StoreContext);

  return (
    <>
      <div className="hidden md:block">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          // autoplay={{
          //   pauseOnMouseEnter: true,
          //   waitForTransition: true,
          //   delay: 5000,
          // }}
          navigation
          pagination={{ clickable: true }}
          // effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          className="w-full  bg-white cursor-grab "
        >
          {userAddresses.userAddresses.map((address, index) => (
            <SwiperSlide key={address.id}>
              <UserAddressSelection
                index={index + 1}
                addressId={address.id}
                state={address.state}
                country={address.country}
                city={address.city}
                street={address.street}
                phone={address.phone}
                secondPhone={address.second_phone}
                postalCode={address.postal_code}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col md:hidden  gap-3 overflow-auto">
        {userAddresses.userAddresses.map((address, index) => (
          <UserAddressSelection
            key={address.id}
            index={index + 1}
            addressId={address.id}
            state={address.state}
            country={address.country}
            city={address.city}
            street={address.street}
            phone={address.phone}
            secondPhone={address.second_phone}
            postalCode={address.postal_code}
          />
        ))}
      </div>
    </>
  );
};

export default observer(AddressesSelections);
