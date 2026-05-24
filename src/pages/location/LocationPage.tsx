import { PageHeader } from "@/components/shared/PageHeader";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { dummyLocations } from "@/dummy/location.dummy";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function LocationPage() {
  const [search, setSearch] = useState("");
  const filteredLocations = dummyLocations;

  return (
    <SectionContainer>
      <PageHeader
        title="Choose a location"
        description="Find a public locker location and start a booking."
      />
      <div className="mt-5">
        <label className="block max-w-lg">
          <span className="mb-1.5 block text-sm font-medium text-slate-700">
            Search location
          </span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by name, code, or address"
            className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm transition outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10"
          />
        </label>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filteredLocations.length === 0 ? (
          <div className="sm:col-span-2 lg:col-span-3">
            <EmptyState
              title="No locations found"
              description="Try another search keyword."
            />
          </div>
        ) : null}
        {filteredLocations.map((location) => (
          <Link key={location.id} to={`/locations/${location.id}`}>
            <Card className="h-full transition hover:border-teal-300">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-teal-50 text-teal-700">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-semibold text-slate-950">
                    {location.name}
                  </h2>
                  <p className="mt-1 line-clamp-2 text-sm text-slate-500">
                    {location.address}
                  </p>
                  <Badge className="mt-3" tone="success">
                    {location.status}
                  </Badge>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </SectionContainer>
  );
}
