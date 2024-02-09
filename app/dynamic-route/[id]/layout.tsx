export default function DynamicRouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // For example you can see dynamic route header in this routes:
  // (x and y are number type)
  // 1.dynamic-route/x
  // 2.dynamic-route/x/nested-dynamic-route
  // 3.dynamic-route/x/nested-dynamic-route/y
  return (
    <>
      <h3 className="p-2 bg-sky-800">Dynamic Route Header</h3>
      {children}
    </>
  );
}
