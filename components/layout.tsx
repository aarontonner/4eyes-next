import Alert from "./alert"
import Footer from "./Footer/Footer"
import Meta from "./meta"
import Nav from "./Nav/Nav"
import RecentPosts from "./RecentPosts/RecentPosts"

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Nav />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <RecentPosts />
      <section>
        <div
          className="elfsight-app-cba26708-fa0c-4d42-8e62-226d9ac7e4d0"
          data-elfsight-app-lazy
        ></div>
        <script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        ></script>
      </section>
      <Footer />
    </>
  )
}
