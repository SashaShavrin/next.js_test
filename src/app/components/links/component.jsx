"use client";

import Link from "next/link";
import Image from "next/image";
import style from "./style/style.module.css";
import { usePathname } from "next/navigation";


export function Links({ type, size, itemsLink }) {
    const pathname = usePathname();

    return (
        <nav className={type === 'navigation' ? style.links : style.cards}>
            {itemsLink.map((link) => {
                return (
                    <Link
                        key={link.id}
                        href={link.href}
                        className={`link ${pathname === link.href ? style.active : ""}`}
                    >
                        {type === "cards" && link.image ? (
                            <div className={style.card}>
                                <Image
                                    src={link.image}
                                    className={style.card_img}
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                    }}
                                    width={150}
                                    height={100}
                                    alt={link.text}
                                />
                                {link.text !== 'home' ? link.text : ''}
                            </div>
                        ) : type === 'navigation' && size.width > 576 ? (
                            <div className={style.link}>
                                {link.icon}
                                {link.text}
                            </div>
                        ) : ''}
                    </Link>
                );
            })}
        </nav>
    );
}


