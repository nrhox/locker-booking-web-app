import { create } from "zustand";
import { dummyLocations } from "@/dummy/location.dummy";
import type { Location, LocationFormValues } from "@/types/location";

type LocationState = {
  locations: Location[];
  getById: (id: string) => Location | undefined;
  addLocation: (values: LocationFormValues) => Location;
};

export const useLocationStore = create<LocationState>((set, get) => ({
  locations: dummyLocations,
  getById: (id) => get().locations.find((location) => location.id === id),
  addLocation: (values) => {
    const location: Location = {
      id: crypto.randomUUID(),
      ...values,
      timezone: "Asia/Jakarta",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    set((state) => ({ locations: [...state.locations, location] }));
    return location;
  },
}));
