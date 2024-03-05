import type { ReactNode } from "react";

export interface DashboardLayoutProps {
    children: ReactNode;
    users: ReactNode;
    revenue: ReactNode;
    notifications: ReactNode;
    login: ReactNode;
}