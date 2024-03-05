import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <div className="flex gap-2 items-end">
      <p>Archived Notifications</p>
      <Link href={"/complex-dashboard"} className="text-sm text-violet-600">
        Default
      </Link>
    </div>
  );
}
