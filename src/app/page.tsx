import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center space-y-6">
      <section className="text-center">
        <h1 className="text-6xl font-bold uppercase tracking-wide text-orange-600">
          Invote
        </h1>
        <p>invoice and quotation application</p>
      </section>
      <section className="flex flex-row space-x-3">
        <Link className="btn btn-primary" href="/invoice">
          Invoice
        </Link>
        <Link className="btn btn-primary" href="/quotation">
          Quotation
        </Link>
      </section>
    </main>
  );
}
