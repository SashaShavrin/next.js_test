import { Navbar } from "../components/navbar/component";

export default function ShowLayout({ children }) {
  return (
    <section>
      <Navbar type="navigation" />
      {children}
    </section>
  );
}
