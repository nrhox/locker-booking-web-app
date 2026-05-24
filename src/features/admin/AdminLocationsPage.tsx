import { Eye, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Table, type TableColumn } from "@/components/shared/Table";
import { Badge } from "@/components/ui/Badge";
import { ROUTES } from "@/constants/routes";
import { useLocationStore } from "@/stores/location.store";
import type { Location } from "@/types/location";

export function AdminLocationsPage() {
  const locations = useLocationStore((state) => state.locations);
  const columns: TableColumn<Location>[] = [
    {
      key: "name",
      header: "Name",
      render: (location) => (
        <span className="font-medium text-slate-950">{location.name}</span>
      ),
    },
    { key: "code", header: "Code", render: (location) => location.code },
    {
      key: "status",
      header: "Status",
      render: (location) => (
        <Badge tone={location.status === "ACTIVE" ? "success" : "neutral"}>
          {location.status}
        </Badge>
      ),
    },
    {
      key: "detail",
      header: "",
      render: (location) => (
        <Link
          className="inline-flex h-9 items-center gap-2 rounded-md px-3 text-sm font-medium text-teal-700 hover:bg-teal-50"
          to={ROUTES.adminLocationDetail(location.id)}
        >
          <Eye className="h-4 w-4" />
          Detail
        </Link>
      ),
    },
  ];

  return (
    <SectionContainer>
      <PageHeader
        title="Locations"
        description="Manage locations and their locker inventory."
        action={
          <Link
            to={ROUTES.adminLocationNew}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-teal-700 bg-teal-700 px-4 text-sm font-medium text-white transition hover:bg-teal-800"
          >
            <Plus className="h-4 w-4" />
            Add location
          </Link>
        }
      />
      <div className="mt-5">
        <Table
          items={locations}
          columns={columns}
          getRowKey={(location) => location.id}
          emptyTitle="No locations"
        />
      </div>
    </SectionContainer>
  );
}
