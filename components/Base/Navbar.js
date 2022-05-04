import React, { useState } from "react";
import Link from "next/link";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useAuthContext } from "../../context/authContext";

export default function Navbar() {
  const router = useRouter();
  const [navOpen, setNavOpen] = useState(false);
  const { user, initializing } = useAuthContext();

  return (
    <header className="nav">
      <div className="nav__primary bg-light">
        <div className="container">
          <ul className="nav__primary-navigation menu-x">
            <li>
              <Link href="/">Почетна</Link>
            </li>
            <li>
              <Link href="/products">Производи</Link>
            </li>
            <li>
              <Link href="/about">За нас</Link>
            </li>
            <li>
              <Link href="/career">Кариера</Link>
            </li>
            {!user && !initializing ? (
              <li>
                <Link href="/login">Најава</Link>
              </li>
            ) : (
              <li>
                <Link href="/admin/products">Админ</Link>
              </li>
            )}
          </ul>
          <div className="nav__primary-languages menu-x">
            {/* <div
              onClick={handleLocale}
              data-lang="mk"
              className="nav__primary-language"
            >
              <span>MK</span>
              <img src="/Flags/mk.svg" alt="Macedonia" />
            </div> */}
            <Link
              href={router.asPath}
              locale="mk"
              className="nav__primary-language"
              scroll={false}
            >
              <a className="menu-x">
                <span>MK</span>
                <img src="/Flags/mk.svg" alt="Macedonia" />
              </a>
            </Link>
            <Link
              href={router.asPath}
              locale="en"
              scroll={false}
              className="nav__primary-language"
            >
              <a className="menu-x">
                <span>EN</span>
                <img src="/Flags/us.svg" alt="USA" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="nav__secondary">
        <div className="container">
          <Link href="/">
            <img src="/Base/logo.png" alt="" />
          </Link>
          <div className="nav__secondary-separator"></div>
          <ul
            className={`menu-x nav__secondary-menu ${
              navOpen ? "nav__secondary-mobile" : ""
            }`}
          >
            <li>
              <Link href="/products?category=cosmetic-products">
                Козметички производи
              </Link>
              <ul className="nav__additional">
                <li className="nav__additional-li">
                  <Link href="/products?category=children-cosmetics">
                    Детска козметика
                  </Link>
                </li>
                <li className="nav__additional-li">
                  <Link href="/products?category=hair-care">Нега на коса</Link>
                </li>
                <li className="nav__additional-li">
                  <Link href="/products?category=creams">Креми</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/products?category=disinfectants">
                Средства за дезинфекција
              </Link>
            </li>
            <li>
              <Link href="/products?category=аuxiliary-medicines">
                Помошни лековити препарати
              </Link>
            </li>
            <li>
              <Link href="/products?category=hygiene-products">
                Средства за хигиена
              </Link>
            </li>
            <li>
              <Link href="/products?category=beauty-salons">
                Козметички салони
              </Link>
            </li>
            <li>
              <Link href="/products?category=trade-goods">Трговска стока</Link>
            </li>
          </ul>
          <div
            className="nav__secondary__mobile"
            onClick={() => setNavOpen(!navOpen)}
          >
            Категории
            <FontAwesomeIcon fixedWidth icon={faBars} />
          </div>
        </div>
      </div>
    </header>
  );
}
