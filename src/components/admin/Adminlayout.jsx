import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard, Building2, MessageSquare,
  CalendarCheck, Users, LogOut,
} from "lucide-react";

const links = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/admin/properties", label: "Properties", icon: Building2 },
  { to: "/admin/inquiries", label: "Inquiries", icon: MessageSquare },
  { to: "/admin/bookings", label: "Bookings", icon: CalendarCheck },
  { to: "/admin/users", label: "Users", icon: Users },
];

export default function AdminLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside style={{ width: 220, background: "#1A2A3A", color: "#fff", display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "20px 22px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <span style={{ fontSize: 17, fontFamily: "'Playfair Display', serif" }}>
            Dream Home <span style={{ color: "#C9A84C" }}>Admin</span>
          </span>
        </div>
        <nav style={{ flex: 1, padding: "12px 10px", display: "flex", flexDirection: "column", gap: 4 }}>
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to} to={to} end={end}
              style={({ isActive }) => ({
                display: "flex", alignItems: "center", gap: 10,
                padding: "10px 14px", borderRadius: 8, textDecoration: "none",
                fontSize: 14, fontWeight: isActive ? 600 : 400,
                background: isActive ? "#C9A84C" : "transparent",
                color: isActive ? "#1A2A3A" : "rgba(255,255,255,0.8)",
              })}
            >
              <Icon size={17} /> {label}
            </NavLink>
          ))}
        </nav>
        <button style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 22px", background: "none", border: "none", borderTop: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)", cursor: "pointer", fontSize: 13 }}>
          <LogOut size={16} /> Logout
        </button>
      </aside>
      <main style={{ flex: 1, padding: 32, background: "#F5F0EB" }}>
        <Outlet />
      </main>
    </div>
  );
}