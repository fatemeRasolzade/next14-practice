"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
];

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();

  function handleBackToHomepage() {
    router.push("/");
  }

  function handleBackToPerviousPage() {
    router.back();
  }

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
        <div className="flex gap-2">
          <p
            className="text-white cursor-pointer"
            onClick={handleBackToHomepage}
          >
            Back to homepage
          </p>
          <p
            className="text-white cursor-pointer"
            onClick={handleBackToPerviousPage}
          >
            Back to pervious page
          </p>
        </div>
      </div>
      {children}
    </>
  );
}
