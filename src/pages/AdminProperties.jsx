import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Plus, Pencil, Trash2, X } from "lucide-react";
import { subscribe, addDoc_, updateDoc_, deleteDoc_ } from "../services/firebase/firestore";
import { uploadImages } from "../services/firebase/storage";

const statusStyle = {
  available: "bg-green-100 text-green-700",
  pending:   "bg-yellow-100 text-yellow-700",
  sold:      "bg-red-100 text-red-700",
};

const inputClass = "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold";

export default function AdminProperties() {
  const [properties, setProperties] = useState([]);
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [files, setFiles] = useState(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    return subscribe("properties", setProperties);
  }, []);

  const openAdd  = () => { setEditId(null); reset({}); setFiles(null); setOpen(true); };
  const openEdit = (p) => { setEditId(p.id); reset(p); setFiles(null); setOpen(true); };

  const onSubmit = async (data) => {
    setSaving(true);
    try {
      const payload = {
        ...data,
        price:     Number(data.price),
        size:      Number(data.size),
        bedrooms:  Number(data.bedrooms),
        bathrooms: Number(data.bathrooms),
        isFeatured: data.isFeatured || false,
      };
      if (editId) {
        if (files?.length) payload.images = await uploadImages(files, editId);
        await updateDoc_("properties", editId, payload);
      } else {
        const ref = await addDoc_("properties", { ...payload, images: [] });
        if (files?.length) await updateDoc_("properties", ref.id, { images: await uploadImages(files, ref.id) });
      }
      setOpen(false);
    } catch (e) { alert("Error: " + e.message); }
    finally { setSaving(false); }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this property?")) return;
    await deleteDoc_("properties", id);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl text-navy mb-1">Properties</h1>
          <p className="text-gray-500 text-sm">Add, edit or remove listings</p>
        </div>
        <button onClick={openAdd}
          className="flex items-center gap-2 bg-gold text-navy font-semibold px-5 py-2.5 rounded-lg text-sm hover:brightness-95">
          <Plus size={16} /> Add Property
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-navy text-white text-left">
              <th className="px-5 py-3 font-medium">Title</th>
              <th className="px-5 py-3 font-medium">City</th>
              <th className="px-5 py-3 font-medium">Type</th>
              <th className="px-5 py-3 font-medium">Price</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-10 text-gray-400">
                  No properties yet — click "Add Property"
                </td>
              </tr>
            )}
            {properties.map((p) => (
              <tr key={p.id} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="px-5 py-3 font-medium text-navy">{p.title}</td>
                <td className="px-5 py-3 text-gray-500">{p.city}</td>
                <td className="px-5 py-3 text-gray-500 capitalize">{p.type}</td>
                <td className="px-5 py-3 text-navy">${Number(p.price).toLocaleString()}</td>
                <td className="px-5 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyle[p.status]}`}>
                    {p.status}
                  </span>
                </td>
                <td className="px-5 py-3 text-right">
                  <button onClick={() => openEdit(p)} className="text-gray-400 hover:text-gold mr-3 bg-transparent border-none cursor-pointer">
                    <Pencil size={15} />
                  </button>
                  <button onClick={() => handleDelete(p.id)} className="text-red-400 hover:text-red-600 bg-transparent border-none cursor-pointer">
                    <Trash2 size={15} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg overflow-y-auto max-h-[90vh]">

            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="font-serif text-lg text-navy">
                {editId ? "Edit Property" : "Add New Property"}
              </h3>
              <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-600 bg-transparent border-none cursor-pointer">
                <X size={18} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 flex flex-col gap-4">
              <div>
                <label className="block text-xs font-medium mb-1">Title *</label>
                <input className={inputClass} placeholder="e.g. Hillcrest Villa"
                  {...register("title", { required: "Required" })} />
                {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium mb-1">Description</label>
                <textarea className={inputClass} rows={3} placeholder="Property description..."
                  {...register("description")} />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium mb-1">Price (USD) *</label>
                  <input type="number" className={inputClass} placeholder="150000"
                    {...register("price", { required: true })} />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">Size (sq m)</label>
                  <input type="number" className={inputClass} placeholder="79" {...register("size")} />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">Bedrooms</label>
                  <input type="number" className={inputClass} placeholder="4" {...register("bedrooms")} />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">Bathrooms</label>
                  <input type="number" className={inputClass} placeholder="3" {...register("bathrooms")} />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">City *</label>
                  <input className={inputClass} placeholder="Lahore"
                    {...register("city", { required: true })} />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">Area</label>
                  <input className={inputClass} placeholder="DHA Phase 6" {...register("location")} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium mb-1">Type</label>
                  <select className={inputClass} {...register("type")}>
                    <option value="villa">Villa</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="smart-home">Smart Home</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">Status</label>
                  <select className={inputClass} {...register("status")}>
                    <option value="available">Available</option>
                    <option value="pending">Pending</option>
                    <option value="sold">Sold</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium mb-1">Images</label>
                <input type="file" multiple accept="image/*" className={inputClass}
                  onChange={(e) => setFiles(e.target.files)} />
              </div>

              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="checkbox" {...register("isFeatured")} />
                Mark as featured
              </label>

              <button type="submit" disabled={saving}
                className="w-full bg-gold text-navy font-semibold py-3 rounded-lg text-sm hover:brightness-95 disabled:opacity-60 cursor-pointer">
                {saving ? "Saving..." : editId ? "Update Property" : "Create Property"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
