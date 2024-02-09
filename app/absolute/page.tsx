import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "absolute metadata",
  },
};

export default function Absolute() {
  return <h1>Absolute route</h1>;
}
