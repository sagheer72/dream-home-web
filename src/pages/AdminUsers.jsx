import { useEffect, useState } from "react";
import { subscribe, updateDoc_ } from "../services/firebase/firestore";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    return subscribe("users", setUsers);
  }, []);

  const toggleBlock = (u) => {
    updateDoc_("users", u.id, {
      accountStatus: u.accountStatus === "blocked" ? "active" : "blocked",
    });
  };

  return (
    <div>
      <h1 className="font-serif text-3xl text-navy mb-1">Users</h1>
      <p className="text-gray-500 text-sm mb-8">Manage platform users</p>

      <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-navy text-white text-left">
              <th className="px-5 py-3 font-medium">Name</th>
              <th className="px-5 py-3 font-medium">Email</th>
              <th className="px-5 py-3 font-medium">Phone</th>
              <th className="px-5 py-3 font-medium">Role</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-10 text-gray-400">No users yet.</td>
              </tr>
            )}
            {users.map((u) => (
              <tr key={u.id} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="px-5 py-3 font-medium text-navy">{u.name}</td>
                <td className="px-5 py-3 text-gray-500">{u.email}</td>
                <td className="px-5 py-3 text-gray-500">{u.phone || "—"}</td>
                <td className="px-5 py-3 text-gray-500 capitalize">{u.role}</td>
                <td className="px-5 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    u.accountStatus === "blocked"
                      ? "bg-red-100 text-red-700"
                      : "bg-green-100 text-green-700"
                  }`}>
                    {u.accountStatus || "active"}
                  </span>
                </td>
                <td className="px-5 py-3 text-right">
                  <button onClick={() => toggleBlock(u)}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold border bg-transparent cursor-pointer ${
                      u.accountStatus === "blocked"
                        ? "border-green-300 text-green-700 hover:bg-green-50"
                        : "border-red-300 text-red-600 hover:bg-red-50"
                    }`}>
                    {u.accountStatus === "blocked" ? "Unblock" : "Block"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
