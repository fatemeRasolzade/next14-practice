"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
];

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <>
      <div className="flex justify-between items-center bg-green-700 p-2">
        <h3>Auth Header</h3>
        <div className="flex gap-2">
          {navLinks.map(({ name, href }) => {
            const isActive = pathname.startsWith(href);
            return (
              <Link
                href={href}
                key={name}
                className={
                  isActive ? "text-white font-bold" : "text-gray-300 font-thin"
                }
              >
                {name}
              </Link>
            );
          })}
        </div>
      </div>
      {children}
    </>
  );
}
