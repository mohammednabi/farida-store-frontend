"use client";
import { Image } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

import ZoomedImage from "./ZoomedImage";

import { observer } from "mobx-react-lite";
import { useParams } from "next/navigation";
import { Images, ImagesData } from "@/stores/specificTypes/strapiProductType";
import {
  ArabicImages,
  ArabicImagesData,
} from "@/stores/specificTypes/productArabicDataType";

interface imagesProps {
  allImages: Images | ArabicImages;
}

const ImagesSection = ({ allImages }: imagesProps) => {
  const [selectedImage, setSelectedImage] = useState<
    ImagesData | ArabicImagesData
  >(allImages?.data[0]);

  useEffect(() => {
    setSelectedImage(allImages?.data[0]);
  }, [allImages?.data]);

  return (
    <div className="flex flex-col gap-5">
      <ZoomedImage src={`${selectedImage?.attributes.url}`} />

      <div className="grid grid-cols-5 gap-2  ">
        {allImages?.data?.map((img) => (
          <div
            key={img.id}
            className={`w-full aspect-square  transition-all bg-mainGray border-solid border-2 ${
              img.id === selectedImage?.id
                ? "border-mainBlack"
                : "border-mainGray"
            } hover:border-mainPink p-1 flex items-center justify-center rounded-md cursor-pointer`}
            onClick={() => {
              setSelectedImage(img);
            }}
          >
            <Image
              src={`${img.attributes.url}`}
              radius="none"
              alt=""
              className="w-full h-auto aspect-square object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default observer(ImagesSection);
