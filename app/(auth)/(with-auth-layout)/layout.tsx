export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <h3 className="p-2 bg-green-700">Auth Header</h3>
        {children}
      </>
    );
  }
  