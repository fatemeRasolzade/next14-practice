import type { DashboardLayoutProps } from "./interface";

export default function DashboardLayout({ children, users, revenue, notifications }: DashboardLayoutProps) {
  return (
    <>
      <div>{children}</div>
      {users}
      {revenue}
      {notifications}
    </>
  );
}
