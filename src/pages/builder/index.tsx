/* eslint-disable @next/next/no-img-element */
import React from "react";

const Builder = () => {
  return (
    <main className="my-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl border border-gray-500 p-4">
        <div className="flex flex-row">
          <section className="flex w-full max-w-xs flex-col">
            <div>
              <input
                id="selectImage"
                type="file"
                accept="image/*"
                className="hidden"
              />
              <label htmlFor="selectImage">
                <img
                  src="https://ui-avatars.com/api/?size=500"
                  className="w-32"
                  alt="Company Picture"
                />
              </label>
            </div>
          </section>
          <section className="flex w-full flex-col justify-center space-y-1">
            <h2 className="text-3xl font-thin">Quotation</h2>
            <div className="form-control">
              <input
                type="text"
                placeholder="Client name"
                className="text-4xl bg-transparent focus:outline-none break-words"
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Builder;
