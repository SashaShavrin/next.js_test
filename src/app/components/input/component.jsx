"use client";
import style from './style/style.module.css'

export function Input({ filter }) {
  return <input className={style.input} placeholder='Search...' type="text" onChange={(e) => filter(e.target.value)} />;
}
