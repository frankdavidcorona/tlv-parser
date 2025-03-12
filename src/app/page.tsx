import { StringInput } from '@/components/string-input';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col items-center p-4 md:p-8">
        <div className="w-full max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight text-center mb-4">
            EMV TLV Parser
          </h1>
          <p className="text-muted-foreground text-center max-w-md mx-auto mb-8">
            Parse and analyze EMV (Europay, Mastercard, and Visa) TLV
            (Type-Length-Value) data with detailed tag information and
            specialized field parsing.
          </p>
          <StringInput />
        </div>
      </main>
      <Footer />
    </div>
  );
}
