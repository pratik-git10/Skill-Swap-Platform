import { Button } from "./ui/button";

type User = {
  id: number;
  name: string;
  skillsOffered: string[];
  skillsWanted: string[];
  availability: string;
};

export function ProfileCard({ user }: { user: User }) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm bg-white dark:bg-neutral-900">
      <h3 className="text-lg font-semibold text-amber-600">{user.name}</h3>
      <p className="mt-2">
        <strong>Offers:</strong> {user.skillsOffered.join(", ")}
      </p>
      <p>
        <strong>Wants:</strong> {user.skillsWanted.join(", ")}
      </p>
      <p>
        <strong>Availability:</strong> {user.availability}
      </p>
      <Button className="cursor-pointer mt-4 w-full bg-neutral-600 text-white px-4 py-2 rounded hover:bg-neutral-700 transition">
        Request Swap
      </Button>
    </div>
  );
}
