import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-gray-800 text-gray-50 flex flex-col h-full ">
        <header className="bg-gray-600 text-center p-2">
          <h1 className="text-3xl">Use case domain-functions with Nextjs 13</h1>
          <p className="text-green-400">
            Nextjs 13 + domain-functions + Tailwindcss + Typescript
          </p>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-gray-600 text-center py-8">
          <p>By Paulo Spiguel</p>
        </footer>
      </body>
    </html>
  );
}
