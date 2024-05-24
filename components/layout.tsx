import Alert from "./alert";
import Footer from "./Footer/Footer";
import Meta from "./meta";
import Nav from "./Nav/Nav";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Nav />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
