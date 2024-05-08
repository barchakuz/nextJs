


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    
        <h1>Inner nav Item</h1>
        {children}
    </>
  );
}
