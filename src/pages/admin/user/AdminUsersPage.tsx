import { PageHeader } from "@/components/shared/PageHeader";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Table, type TableColumn } from "@/components/shared/Table";
import { ROUTES } from "@/constants/routes";
import { dummyUsersList } from "@/dummy/auth.dummy";
import type { User } from "@/types/auth";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

export function AdminUsersPage() {
  const columns: TableColumn<User>[] = [
    {
      key: "name",
      header: "Email",
      render: (user) => (
        <span className="font-medium text-slate-950">{user.email}</span>
      ),
    },
    {
      key: "full_name",
      header: "Full name",
      render: (user) => user.displayName,
    },
    { key: "role", header: "Role", render: (user) => user.role },
    {
      key: "provider",
      header: "Provider",
      render: (user) => user.oauthProviders[0].provider,
    },
    {
      key: "detail",
      header: "",
      render: (user) => (
        <div className="flex items-center gap-2">
          <Link
            className="inline-flex h-9 items-center gap-2 rounded-md px-3 text-sm font-medium text-teal-700 hover:bg-teal-50"
            to={ROUTES.adminUserDetail(user.id)}
          >
            <Eye className="size-4" />
            Detail
          </Link>
        </div>
      ),
    },
  ];

  return (
    <SectionContainer>
      <PageHeader title="User" description="Manage users and role." />
      <div className="mt-5">
        <Table
          items={dummyUsersList}
          columns={columns}
          getRowKey={(location) => location.id}
          emptyTitle="No locations"
        />
      </div>
    </SectionContainer>
  );
}
