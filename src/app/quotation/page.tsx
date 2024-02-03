import QuotationForm from "@/components/container/quotation-form";

export default function Home() {
  return (
    <main className="flex h-[95%] w-full max-w-2xl flex-col items-center justify-center space-y-6">
      <h1 className="text-6xl font-bold capitalize tracking-wide text-orange-600">
        Quotation
      </h1>
      <QuotationForm />
    </main>
  );
}
