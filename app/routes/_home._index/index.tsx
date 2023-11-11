import { MetaArgs } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";

export default function HomeLayout() {
  return (
    <>
      <h1>Home Index</h1>
      <Link to="/shop">Go to Shop</Link>
    </>
  );
}
