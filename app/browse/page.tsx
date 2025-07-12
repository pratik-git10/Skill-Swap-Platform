"use client";
import { PageWrapper } from "@/components/pagewrapper";
import { ProfileCard } from "@/components/profilecard";
import { SectionHeading } from "@/components/ui/sectionheading";
import { useState } from "react";

const mockUsers = [
  {
    id: 1,
    name: "Aarav",
    skillsOffered: ["Photoshop"],
    skillsWanted: ["Excel"],
    availability: "Weekends",
  },
  {
    id: 2,
    name: "Nisha",
    skillsOffered: ["Excel"],
    skillsWanted: ["Photoshop"],
    availability: "Evenings",
  },
];

export default function BrowsePage() {
  const [search, setSearch] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");

  const filteredUsers = mockUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.skillsOffered.join(" ").toLowerCase().includes(search.toLowerCase());
    const matchesAvailability = availabilityFilter
      ? user.availability === availabilityFilter
      : true;
    return matchesSearch && matchesAvailability;
  });

  return (
    <PageWrapper>
      <SectionHeading title="Browse Skill Profiles" />
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search skills or names..."
          className="flex-1 px-4 py-2 border rounded"
        />
        <select
          value={availabilityFilter}
          onChange={(e) => setAvailabilityFilter(e.target.value)}
          className="px-4 py-2 border rounded">
          <option value="">All Availabilities</option>
          <option value="Weekends">Weekends</option>
          <option value="Evenings">Evenings</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filteredUsers.map((user) => (
          <ProfileCard key={user.id} user={user} />
        ))}
        {filteredUsers.length === 0 && (
          <p className="text-center col-span-full text-gray-500">
            No results found.
          </p>
        )}
      </div>
    </PageWrapper>
  );
}
