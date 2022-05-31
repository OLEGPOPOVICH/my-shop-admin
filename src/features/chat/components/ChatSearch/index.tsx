import React, { ChangeEvent } from "react";
import "./ChatSearch";
import { InputSearch } from "@common/components/UI";

type ChatSearchType = {
  searchValue: string;
  searchChange: (value: string) => void;
  searchDisabled?: boolean;
  clearSearch: () => void;
};

export const ChatSearch = ({
  searchValue,
  searchChange,
  searchDisabled,
  clearSearch,
}: ChatSearchType): JSX.Element => {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    searchChange(event.target.value);
  };

  return (
    <div className="chat__search">
      <InputSearch
        placeholder="Поиск"
        value={searchValue}
        onChange={handleSearchChange}
        disabled={searchDisabled}
        clearSearch={clearSearch}
      />
    </div>
  );
};
