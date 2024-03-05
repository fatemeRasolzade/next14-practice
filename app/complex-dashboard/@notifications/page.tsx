import Link from "next/link";

export default function Notifications() {
  return (
    <div className="flex gap-2 items-end">
      <p>Notifications</p>
      <Link
        href={"/complex-dashboard/archived"}
        className="text-sm text-teal-600"
      >
        Archived
      </Link>
    </div>
  );
}
