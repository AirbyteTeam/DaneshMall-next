import React from "react";
import Card from "@/components/companies_Components/Card";
import SearchBox_filterButton from "@/components/companies_Components/SearchBox&filterButton";
const companies = [
  { id: 1, title: "سخت افزار های برق و الکترونیک" },
  { id: 2, title: "سخت افزار های برق و الکترونیک" },
  { id: 3, title: "سخت افزار های برق و الکترونیک" },
  { id: 4, title: "سخت افزار های برق و الکترونیک" },
  { id: 5, title: "سخت افزار های برق و الکترونیک" },
  { id: 6, title: "سخت افزار های برق و الکترونیک" },
  { id: 7, title: "سخت افزار های برق و الکترونیک" },
  { id: 8, title: "سخت افزار های برق و الکترونیک" },
  { id: 9, title: "سخت افزار های برق و الکترونیک" },
];

export default function Companies() {
  return (
    <div>
      <SearchBox_filterButton />
      <div className=" flex flex-wrap justify-center	gap-x-6 gap-y-20	my-[10px]">
        {companies.map((company) => (
          <Card id={company.id} title={company.title} />
        ))}
      </div>
    </div>
  );
}
