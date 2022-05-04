import React, { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function AdminMenu() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="admin-menu">
      <span>
        <FontAwesomeIcon
          onClick={() => setNavOpen(!navOpen)}
          fixedWidth
          icon={faBars}
        />
        Административно мени
      </span>
      <ul className={`admin-menu__menu ${navOpen ? "admin-menu__active" : ""}`}>
        <li>
          <Link href="/admin/products">Производи</Link>
        </li>
        <li>
          <Link href="/admin/career">Огласи за работа</Link>
        </li>
        <li>
          <Link href="/admin/job-applications">Апликации за работа</Link>
        </li>
        <li>
          <Link href="/admin/brands">Брендови</Link>
        </li>
        <li>
          <Link href="/admin/promotions">Промоции</Link>
        </li>
      </ul>
    </div>
  );
}
