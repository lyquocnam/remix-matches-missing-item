import { MetaArgs } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta = ({ matches }: MetaArgs) => {
  console.log(matches);
  console.log(matches[1]);
  return [];
};

export default function HomeLayout() {
  return (
    <>
      <h1>Home Layout</h1>
      <Outlet />
    </>
  );
}
