import { notFound } from "next/navigation";
import type { DynamicRouteProps } from "../../interface";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function NestedDynamicRoute({ params }: DynamicRouteProps) {
  const { id, nestedId } = params;
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Random number is 1 and throw error try again :/");
  }
  if (parseInt(id) > 1000) {
    notFound();
  }
  return (
    <h1>
      {id} page of dynamic route, {nestedId} page of nested dynamic route
    </h1>
  );
}
