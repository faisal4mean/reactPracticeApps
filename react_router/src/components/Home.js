/* eslint-disable array-callback-return */
import React from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import style from "./Home.module.css";
import { getInvoices } from "../invoices";
const Home = () => {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <nav>
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {invoices
          .filter((invoice) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((res) => (
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : "",
                };
              }}
              className={style.link}
              to={`/home/${res.number}`}
            >
              {res.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;
