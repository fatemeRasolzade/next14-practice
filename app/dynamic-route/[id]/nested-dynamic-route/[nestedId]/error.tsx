"use client";

interface ErrorBoundaryProps {
  error: Error;
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  return (
    <div>
      <h3 className="p-2 text-red-500"> {error.message}</h3>
      <button className="px-4 pb-2 cursor-pointer" onClick={reset}>
        Try again
      </button>
    </div>
  );
}
