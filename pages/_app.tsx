import { AppProps } from "next/app";
import "../styles/critical.scss";
import "../styles/root.scss";
import "../styles/local.scss";
import "../styles/about.scss";
import "../styles/components.scss";
import "../styles/contact.scss";
import "../styles/faq.scss";
import "../styles/investment.scss";
import "../styles/portfolio.scss";
import "../styles/pricing.scss";
import "../styles/services.scss";
import "../styles/hero.scss";
import "../styles/blog.scss";
import "../styles/blog-gallery.scss";

import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
