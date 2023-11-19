"use client";

import style from "./style/style.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from 'react';
import { Button, Drawer } from 'antd';
import { Links } from "../links/component";
import Link from "next/link";

const itemsLink = [
  { href: "/", text: "home", id: 0, image: null },
  { href: "/soup", text: "soup", id: 1, icon: "🥗", image: "/soup.jpg" },
  { href: "/pizza", text: "pizza", id: 2, icon: "🍕", image: "/pizza.jpg" },
  { href: "/cheese", text: "cheese", id: 3, icon: "🧀", image: "/cheese.jpg" },
];


export function Navbar({ type }) {
  const pathname = usePathname();
  const size = useWindowSize();

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <header className={type === 'navigation' ? style.header : ''}>
      {type === 'navigation' && <h1 className={style.logo}>🍕 FOOD SHOP</h1>}

      <Links type={type} size={size} itemsLink={itemsLink} />

      {type === 'navigation' && size.width < 576 && <Button type="primary" onClick={showDrawer}>
        Menu
      </Button>}

      {size.width < 576 && <Drawer title="Menu" placement="right" onClose={onClose} open={open}>
        {itemsLink.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.href}
              className={`link ${pathname === link.href ? style.active : ""}`}
            >

              <div className={style.link} onClick={onClose}>
                {link.icon}
                {link.text}
              </div>

            </Link>
          );
        })}
      </Drawer>}
    </header>
  );
}


function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}