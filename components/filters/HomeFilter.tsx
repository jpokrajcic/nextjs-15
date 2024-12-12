"use client";
import {useSearchParams, useRouter} from "next/navigation";
import React, {useState} from "react";

import {removeKeysFromUrlQuery, formUrlQuery} from "@/lib/url";

import {Button} from "../ui/button";

const filters = [
  {name: "React", value: "react"},
  {name: "Javascript", value: "javascript"},
  {name: "Newest", value: "Newest"},
  {name: "Popular", value: "Popular"},
  {name: "Unanswered", value: "Unanswered"},
  {name: "Recommended", value: "Recommended"},
];

const HomeFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filterParams = searchParams.get("filter") || "";

  const [active, setActive] = useState(filterParams || "");

  function filterClickHandler(filter: string) {
    if (filter === active) {
      setActive("");
      const newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["filter"],
      });

      router.push(newUrl, {scroll: false});
    } else {
      setActive(filter);
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: filter,
      });

      router.push(newUrl, {scroll: false});
    }
  }
  return (
    <div className="mt-10 hidden flex-wrap gap-3 sm:flex">
      {filters.map((filter) => (
        <Button
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
            active === filter.value
              ? "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400"
              : " dark bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300 "
          }`}
          key={filter.value}
          onClick={() => filterClickHandler(filter.value)}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilter;
