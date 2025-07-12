"use client";
import { motion } from "framer-motion";

const adminActions = [
  "Moderate skill descriptions",
  "Ban users who violate rules",
  "Download user & swap reports",
  "Send platform-wide messages",
  "Monitor swap activity (pending, accepted, cancelled)",
];

export default function AdminDashboardPage() {
  return (
    <motion.section
      className="py-12 max-w-4xl mx-auto px-4"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}>
      <h2 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h2>
      <ul className="space-y-4">
        {adminActions.map((action, idx) => (
          <motion.li
            key={idx}
            className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded p-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}>
            ✅ {action}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
