"use client";
import { useState } from "react";
import { z } from "zod";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const profileSchema = z.object({
  name: z.string().min(2, "Name is required"),
  skillsOffered: z.string().min(2, "Enter at least one skill you offer"),
  skillsWanted: z.string().min(2, "Enter at least one skill you want"),
});

export default function ProfilePage() {
  const [form, setForm] = useState({
    name: "",
    skillsOffered: "",
    skillsWanted: "",
    availability: "weekends",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = profileSchema.safeParse(form);
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach(
        (err: { path: (string | number)[]; message: string }) => {
          if (err.path[0]) newErrors[err.path[0]] = err.message;
        }
      );
      setErrors(newErrors);
      setSuccess(false);
    } else {
      setSuccess(true);
      console.log("✔️ Profile Saved!", form);
    }
  };

  return (
    <motion.section
      className="max-w-2xl mx-auto py-12 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}>
      <h2 className="text-3xl font-semibold mb-8">
        Create / Edit Your Profile
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="">
          <label className="block text-sm font-medium">Your Name</label>
          <Input
            name="name"
            className="w-full mt-1 px-4 py-2 border rounded"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Priya Joshi"
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Skills Offered */}
        <div>
          <label className="block text-sm font-medium">Skills You Offer</label>
          <Input
            name="skillsOffered"
            className="w-full mt-1 px-4 py-2 border rounded"
            value={form.skillsOffered}
            onChange={handleChange}
            placeholder="e.g. Singing, Photoshop"
          />
          {errors.skillsOffered && (
            <p className="text-red-500 text-sm mt-1">{errors.skillsOffered}</p>
          )}
        </div>

        {/* Skills Wanted */}
        <div>
          <label className="block text-sm font-medium">Skills You Want</label>
          <Input
            name="skillsWanted"
            className="w-full mt-1 px-4 py-2 border rounded"
            value={form.skillsWanted}
            onChange={handleChange}
            placeholder="e.g. Guitar, Excel"
          />
          {errors.skillsWanted && (
            <p className="text-red-500 text-sm mt-1">{errors.skillsWanted}</p>
          )}
        </div>

        {/* Availability */}
        <div>
          <label className="block text-sm font-medium">Availability</label>
          <select
            name="availability"
            className="w-full mt-1 px-4 py-2 border rounded "
            value={form.availability}
            onChange={handleChange}>
            <option value="weekends" className="bg-[#18181b]">
              Weekends
            </option>
            <option value="evenings" className="bg-[#18181b]">
              Evenings
            </option>
            <option value="flexible" className="bg-[#18181b]">
              Flexible
            </option>
          </select>
        </div>

        {/* Submit */}
        <Button type="submit" className="cursor-pointer">
          {" "}
          Save Profile
        </Button>

        {success && (
          <p className="text-green-600 mt-4">Profile saved successfully ✅</p>
        )}
      </form>
    </motion.section>
  );
}
