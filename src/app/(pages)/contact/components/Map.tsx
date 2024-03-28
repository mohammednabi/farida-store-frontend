"use client";
import React from "react";
import { useScreenSize } from "react-screen-size-helper";

const Map = () => {
  const { currentWidth } = useScreenSize({});
  return (
    <div className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.833073421141!2d31.389469719992995!3d30.012949155465638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d20b8f01d87%3A0x5f4e66ee93a9e3b8!2z2YXYudix2LYg2KfZhNmD2KrYp9ioIC0g2KfZhNiq2KzZhdi5INin2YTYrtin2YXYsyAtINmF2LXYsQ!5e0!3m2!1sar!2seg!4v1707033997808!5m2!1sar!2seg"
        width="100%"
        height={currentWidth > 768 ? "800" : "500"}
        //   style="border:0;"
        //   allowfullscreen=""
        loading="lazy"
        //   referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Map;
