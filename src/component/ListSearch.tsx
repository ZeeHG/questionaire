import React, { FC, useEffect, useState } from "react";
import { Input } from "antd";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import type { ChangeEvent } from "react";
import Search from "antd/es/transfer/search";
import { LIST_SEARCH_PARAM_KEY } from "../constant";

const ListSearch: FC = () => {
  const [value, setValue] = useState("");
  const nav = useNavigate();
  const { pathname } = useLocation();
  const { Search } = Input;
  function handlechange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const curVal = searchParams.get(LIST_SEARCH_PARAM_KEY) || "";
    setValue(curVal);
  }, [searchParams]);
  function handleSearch(value: string) {
    nav({ pathname, search: "${LIST_SEARCH_PARAM_KEY}=${value}" });
  }
  return (
    <Search
      size="large"
      allowClear
      placeholder="输入关键字"
      onSearch={handleSearch}
      onChange={handlechange}
      style={{ width: "260px" }}
    ></Search>
  );
};
export default ListSearch;
