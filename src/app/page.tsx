import { StringInput } from '@/components/string-input';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8">
      <main className="flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold tracking-tight text-center">
          EMV TLV Parser
        </h1>
        <p className="text-muted-foreground text-center max-w-md">
          Parse and analyze EMV (Europay, Mastercard, and Visa) TLV
          (Type-Length-Value) data with detailed tag information and specialized
          field parsing.
        </p>
        <StringInput />
      </main>
      <footer className="mt-16 text-center text-sm text-muted-foreground">
        <p>Built with Next.js, shadcn/ui, and EMV tag database</p>
      </footer>
    </div>
  );
}
