/* eslint-disable @next/next/no-img-element */
import ImagePicker from "@/components/reusables/imagePicker";
import currency from "currency.js";
import React, { useState } from "react";

const Builder = () => {
  const [companyImageUrl, setCompanyImageUrl] = useState<string>("");
  const [companyImageFile, setCompanyImageFile] = useState<File | null>(null)

  const rupiah = (value: number) =>
    currency(value, {
      symbol: "Rp",
    });

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      <div className="h-full max-h-[95vh] w-full max-w-4xl rounded-lg border border-orange-500 p-6">
        <header className="flex flex-row">
          <section className="w-1/4">
            <div className="h-40 w-40">
              <ImagePicker
                alt="Company Image"
                imageUrl={companyImageUrl}
                setImageUrl={setCompanyImageUrl}
                imageFile={companyImageFile}
                setImageFile={setCompanyImageFile}
              />
            </div>
          </section>
          <section className="flex w-3/4 flex-col justify-center">
            <div className="form-control space-y-2">
              <div>
                <label className="label">
                  <span className="label-text">Your company name</span>
                </label>
                <input
                  type="text"
                  placeholder="Company name..."
                  className="input-bordered input w-full max-w-xs"
                />
              </div>
              <div className="flex flex-row space-x-4">
                <div>
                  <label className="label">
                    <span className="label-text">Quotation no.</span>
                  </label>
                  <input
                    type="number"
                    placeholder="0000"
                    className="input-bordered input input-sm w-24 max-w-xs"
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Issued Date</span>
                  </label>
                  <input
                    type="date"
                    className="input-bordered input input-sm w-full max-w-xs"
                  />
                </div>
              </div>
            </div>
          </section>
        </header>
      </div>
    </main>
  );
};

export default Builder;
