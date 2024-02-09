import { Metadata } from "next";
import type { DynamicRouteProps } from "./interface";

export const generateMetadata = async ({ params }: DynamicRouteProps): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`page ${params.id}`);
    }, 100);
  });
  return {
    title: `Dynamic route ${title}`,
  };
};

export default function DynamicRoute({ params }: DynamicRouteProps) {
  return <h1>{params.id} page of dynamic route</h1>;
}
