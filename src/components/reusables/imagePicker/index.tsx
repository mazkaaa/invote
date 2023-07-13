/* eslint-disable @next/next/no-img-element */
import React, { Dispatch, SetStateAction, useEffect } from "react";

type ImagePickerType = {
  imageUrl: string;
  setImageUrl: Dispatch<SetStateAction<string>>;
  imageFile: File | null;
  setImageFile: Dispatch<SetStateAction<File | null>>;
  alt: string;
};
const ImagePicker = ({
  imageUrl,
  setImageUrl,
  alt,
  setImageFile,
  imageFile,
}: ImagePickerType) => {
  useEffect(() => {
    if (imageFile) {
      setImageUrl(URL.createObjectURL(imageFile));
    }
  }, [imageFile, setImageUrl]);
  return (
    <>
      <input
        id="selectImage"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          if (e.target.files) {
            setImageFile(e.target.files[0]);
          }
        }}
      />
      <label htmlFor="selectImage" className="cursor-pointer">
        {imageUrl === "" ? (
          <div className="flex h-full w-full flex-col items-center justify-center border border-dashed hover:border-solid border-orange-400 p-2 text-center text-xs space-y-2">
            <span className="stroke-orange-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 8l-5-5-5 5M12 4.2v10.3" />
              </svg>
            </span>
            <div className="text-orange-400 font-light">
              <p>Upload your logo here</p>
              <p>(jpg, jpeg, png, svg)</p>
            </div>
          </div>
        ) : (
          <img src={imageUrl} className="w-full h-full object-cover" alt={alt} />
        )}
      </label>
    </>
  );
};

export default ImagePicker;
