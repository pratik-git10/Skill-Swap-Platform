import { Button } from "./ui/button";

export function Pagination({
  current,
  total,
  onPageChange,
}: {
  current: number;
  total: number;
  onPageChange: (page: number) => void;
}) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-6 gap-2">
      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded border ${
            current === page ? "bg-neutral-600" : "dark:bg-neutral-800"
          }`}>
          {page}
        </Button>
      ))}
    </div>
  );
}
