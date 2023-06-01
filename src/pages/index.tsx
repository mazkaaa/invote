import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full h-screen">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-7xl font-bold tracking-wide bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
          Invote
        </h1>
        <p className="text-xl mt-1">
          Invoice and Quotation builder developed by{" "}
          <Link
            className="transition-all border-b-2 border-solid hover:bg-white hover:text-base-200"
            href={"https://mazka.dev"}
          >
            Azka
          </Link>
        </p>
        <Link className="btn btn-lg mt-6" href={"/builder"}>
          Get Started
        </Link>
      </div>
    </main>
  );
}
