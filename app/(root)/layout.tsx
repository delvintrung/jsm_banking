export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <p>Nav bar</p>
      {children}
    </main>
  );
}
