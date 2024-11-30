"use client";

import React, { Fragment, useState } from "react";
import Image from "next/image";

// Importing components from @headlessui/react for combobox functionality.
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";

// array manufacturers
import { manufacturers } from "@/constants";

const SearchManufacture = ({ manufacturer, setManfacturer }: any) => {
  // Using state to store the search query
  const [query, setQuery] = useState("");

  // Filtering manufacturers based on the query entered
  const filteredManufacturers =
    query === "" // If query is empty, return all manufacturers
      ? manufacturers
      : manufacturers.filter(
          (item) =>
            item
              .toLowerCase() // Convert to lowercase for case-insensitive comparison
              .replace(/\s+/g, "") // Remove any spaces for exact matching
              .includes(query.toLowerCase().replace(/\s+/g, "")) // Check if item includes the query text
        );

  return (
    <div className="search-manufacture">
      <Combobox value={manufacturer} onChange={setManfacturer}>
        {/* ComboboxButton is the button that toggles the dropdown (in this case, an image icon). */}
        <ComboboxButton className="absolute top-[14px]">
          <Image
            src="/car-logo.svg"
            alt="car-logo"
            width={20}
            height={20}
            className="ml-4"
          ></Image>
        </ComboboxButton>

        {/* ComboboxInput is the search field where the user types the manufacturer name */}
        <ComboboxInput
          placeholder="Volkswagen"
          displayValue={(manufacturer: string) => manufacturer} // How to display the selected value
          onChange={(e) => setQuery(e.target.value)} // Update the query state when the user types
          className="search-manufacturer__input"
        ></ComboboxInput>

        {/* Transition component is used for smooth animations when the dropdown is shown/hidden */}
        <Transition
          as={Fragment} // Use a Fragment to avoid adding extra DOM nodes
          leave="transition ease-in duration-100" // Define the animation when the dropdown is hidden
          leaveFrom="opacity-100" // Start with full opacity
          leaveTo="opacity-0" // End with opacity 0 (hidden)
          afterLeave={() => setQuery("")} // Reset the query state after the dropdown is hidden
        >
          <ComboboxOptions>
            {/* Mapping through filtered manufacturers to create dropdown options */}
            {filteredManufacturers.map((item, index) => (
              <ComboboxOption
                key={index} // Unique key for each option
                value={item} // The value of the option when selected
                className="search-manufacturer__option" // Custom class for option styling
              >
                {item} {/* Display the manufacturer name */}
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Transition>
      </Combobox>
    </div>
  );
};

export default SearchManufacture;
