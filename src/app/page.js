import { Navbar } from "./components/navbar/component";
import style from "./style/style.module.css";

export default async function Home() {
  return (
    <section className={style.container}>
      <Navbar type="navigation" />
      <main className={style.main}>
        <div className={style.text}>
          The best food on the planet is only with us
        </div>
        <div className={style.text}>In our assortment:</div>
        <div className={style.cards}>
          <Navbar type="cards" />
        </div>
      </main>
    </section>
  );
}
