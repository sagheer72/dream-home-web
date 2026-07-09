import { useEffect, useState } from "react";
import { Building2, MessageSquare, Users, CalendarCheck } from "lucide-react";
import { subscribe } from "../services/firebase/firestore";

function StatCard({ label, value, icon: Icon }) {
  return (
    <div className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-sm">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gold/15">
        <Icon size={22} className="text-gold" />
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-2xl font-semibold text-navy">{value ?? "—"}</p>
      </div>
    </div>
  );
}

export default function AdminOverview() {
  const [counts, setCounts] = useState({});

  useEffect(() => {
    const cols = ["properties", "inquiries", "users", "bookings"];
    const unsubs = cols.map((col) =>
      subscribe(col, (data) =>
        setCounts((prev) => ({ ...prev, [col]: data.length }))
      )
    );
    return () => unsubs.forEach((u) => u());
  }, []);

  return (
    <div>
      <h1 className="font-serif text-3xl text-navy mb-1">Admin Overview</h1>
      <p className="text-gray-500 text-sm mb-8">Platform stats at a glance</p>

      <div className="grid grid-cols-2 gap-4 max-w-2xl">
        <StatCard label="Total Properties" value={counts.properties} icon={Building2} />
        <StatCard label="Total Inquiries"  value={counts.inquiries}  icon={MessageSquare} />
        <StatCard label="Total Users"      value={counts.users}      icon={Users} />
        <StatCard label="Total Bookings"   value={counts.bookings}   icon={CalendarCheck} />
      </div>
    </div>
  );
}
