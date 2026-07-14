import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import { subscribe, updateDoc_ } from "../services/firebase/firestore";

const inputClass = "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold";

export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [selected, setSelected] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    return subscribe("inquiries", setInquiries);
  }, []);

  const onReply = async ({ reply }) => {
    await updateDoc_("inquiries", selected.id, { status: "responded", adminReply: reply });
    reset();
    setSelected(null);
  };

  return (
    <div>
      <h1 className="font-serif text-3xl text-navy mb-1">Inquiries</h1>
      <p className="text-gray-500 text-sm mb-8">Manage buyer inquiries</p>

      <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-navy text-white text-left">
              <th className="px-5 py-3 font-medium">Name</th>
              <th className="px-5 py-3 font-medium">Email</th>
              <th className="px-5 py-3 font-medium">Message</th>
              <th className="px-5 py-3 font-medium">Lead Score</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-10 text-gray-400">No inquiries yet.</td>
              </tr>
            )}
            {inquiries.map((inq) => (
              <tr key={inq.id} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="px-5 py-3 font-medium text-navy">{inq.name}</td>
                <td className="px-5 py-3 text-gray-500">{inq.email}</td>
                <td className="px-5 py-3 text-gray-500 max-w-xs truncate">{inq.message}</td>
                <td className="px-5 py-3">{inq.leadScore ?? "—"}</td>
                <td className="px-5 py-3">
                  <select value={inq.status}
                    onChange={(e) => updateDoc_("inquiries", inq.id, { status: e.target.value })}
                    className="border border-gray-200 rounded-md px-2 py-1 text-xs">
                    <option value="pending">Pending</option>
                    <option value="responded">Responded</option>
                    <option value="closed">Closed</option>
                  </select>
                </td>
                <td className="px-5 py-3 text-right">
                  <button onClick={() => { reset(); setSelected(inq); }}
                    className="border border-gold text-gold bg-transparent px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer hover:bg-gold/10">
                    Reply
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Reply Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="font-serif text-lg text-navy">Reply to Inquiry</h3>
              <button onClick={() => setSelected(null)} className="text-gray-400 bg-transparent border-none cursor-pointer">
                <X size={18} />
              </button>
            </div>
            <form onSubmit={handleSubmit(onReply)} className="p-6 flex flex-col gap-4">
              <div className="bg-cream rounded-lg p-3 text-sm">
                <p className="text-gray-500 mb-1">
                  <strong className="text-navy">{selected.name}</strong> asked:
                </p>
                <p>{selected.message}</p>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Your Response</label>
                <textarea className={inputClass} rows={4} placeholder="Type your reply..."
                  {...register("reply", { required: true })} />
              </div>
              <button type="submit"
                className="w-full bg-gold text-navy font-semibold py-3 rounded-lg text-sm cursor-pointer hover:brightness-95">
                Send Reply
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
