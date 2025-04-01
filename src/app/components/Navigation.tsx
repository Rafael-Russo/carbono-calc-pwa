"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const links = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/track", label: "Track" },
    { href: "/calculators", label: "Calculators" },
  ];

  return (
    <div className="nav-container">
      <nav className="nav">
        <div>
          <Link href="/">
            <div className="nav-logo">
              <img src="/icons/carbono_calc_icon-192.png" alt="Logo" className="nav-logo-img" />
              <span className="nav-logo-text">Carbono Calc</span>
            </div>
          </Link>
        </div>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href} className={`nav-link ${pathname === link.href ? "nav-link-active" : ""}`}>
              <Link href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
