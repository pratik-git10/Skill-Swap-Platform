"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const mockRequests = [
  {
    id: 1,
    name: "Nisha Patel",
    status: "pending",
    skill: "Photoshop",
  },
  {
    id: 2,
    name: "Aarav Mehta",
    status: "accepted",
    skill: "Excel",
  },
];

export default function SwapRequestsPage() {
  return (
    <motion.section
      className="py-12 max-w-4xl mx-auto px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <h2 className="text-3xl font-bold mb-6 text-center">Swap Requests</h2>
      <div className="space-y-6">
        {mockRequests.map((req) => (
          <motion.div
            key={req.id}
            className="p-6 border rounded-lg shadow bg-white dark:bg-neutral-900"
            whileHover={{ scale: 1.01 }}>
            <p className="text-lg font-medium">
              <span className="text-amber-600">{req.name}</span> wants to swap{" "}
              <strong>{req.skill}</strong>
            </p>
            <p className="text-sm mt-1 text-gray-500">Status: {req.status}</p>

            {req.status === "pending" && (
              <div className="flex gap-4 mt-4">
                <Button className="cursor-pointer">Accept</Button>
                <Button className="cursor-pointer">Reject</Button>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
