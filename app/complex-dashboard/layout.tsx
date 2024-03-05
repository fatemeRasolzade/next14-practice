import type { DashboardLayoutProps } from "./interface";

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: DashboardLayoutProps) {
  const isLoggedIn = false;
  return isLoggedIn ? (
    <>
      <div>{children}</div>
      {users}
      {revenue}
      {notifications}
    </>
  ) : (
    login
  );
}
