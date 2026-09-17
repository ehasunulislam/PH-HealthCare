import RoleGuard from "@/components/auth/role-gurd";
import DashboardShell from "@/components/dashboard/dashboard-shell";
import { ReactNode } from "react";

export default function layout({children}: {children: ReactNode}) {
  return (
    <RoleGuard roles={["PATIENT"]}>
      <DashboardShell role="PATIENT">
        {children}
      </DashboardShell>
    </RoleGuard>
  );
}
