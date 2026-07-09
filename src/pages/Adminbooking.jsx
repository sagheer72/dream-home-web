import { useEffect, useState } from "react";
import { subscribe, updateDoc_ } from "../services/firebase/firestore";

const statusStyle = {
  pending:   "bg-yellow-100 text-yellow-700",
  confirmed: "bg-green-100 text-green-700",
  completed: "bg-blue-100 text-blue-700",
  cancelled: "bg-red-100 text-red-700",
};

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    return subscribe("bookings", setBookings);
  }, []);

  return (
    <div>
      <h1 className="font-serif text-3xl text-navy mb-1">Bookings</h1>
      <p className="text-gray-500 text-sm mb-8">Property viewing requests</p>

      <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-navy text-white text-left">
              <th className="px-5 py-3 font-medium">Property ID</th>
              <th className="px-5 py-3 font-medium">Date</th>
              <th className="px-5 py-3 font-medium">Time</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Update</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-10 text-gray-400">No bookings yet.</td>
              </tr>
            )}
            {bookings.map((b) => (
              <tr key={b.id} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="px-5 py-3 font-medium text-navy">{b.propertyId}</td>
                <td className="px-5 py-3 text-gray-500">{b.date}</td>
                <td className="px-5 py-3 text-gray-500">{b.time}</td>
                <td className="px-5 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyle[b.status]}`}>
                    {b.status}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <select value={b.status}
                    onChange={(e) => updateDoc_("bookings", b.id, { status: e.target.value })}
                    className="border border-gray-200 rounded-md px-2 py-1 text-xs">
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
