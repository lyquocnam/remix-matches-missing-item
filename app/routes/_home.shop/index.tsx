import { MetaArgs } from "@remix-run/node";

export const meta = ({ matches }: MetaArgs) => {
  // console.log(matches);
  return [];
};

export default function ShopPage() {
  return <h1>Shop</h1>;
}
