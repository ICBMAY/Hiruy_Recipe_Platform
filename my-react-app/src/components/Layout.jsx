import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout({ title, mainClass, children }) {
  return (
    <>
      <Header title={title} />
      <main className={mainClass}>{children}</main>
      <Footer />
    </>
  );
}