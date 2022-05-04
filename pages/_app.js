import "../styles/css/style.css";
import Layout from "../components/Base/Layout";
import { AuthProvider } from "../context/authContext";
import { AuthGuard } from "../components/Admin/AuthGuard";
import { appWithTranslation } from "next-i18next";
import { motion } from "framer-motion";
import Script from "next/script";

{
  /* <script async src="https://www.googletagmanager.com/gtag/js?id=G-6KK7S1EX81"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6KK7S1EX81');
</script> */
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script> */}
      <AuthProvider>
        {Component.requireAuth ? (
          <AuthGuard>
            <Layout>
              <motion.div
                initial="pageInitial"
                animate="pageAnimate"
                variants={{
                  pageInitial: { opacity: 0 },
                  pageAnimate: { opacity: 1 },
                }}
              >
                <Component {...pageProps} />
              </motion.div>
            </Layout>
          </AuthGuard>
        ) : (
          <Layout>
            <motion.div
              initial="pageInitial"
              animate="pageAnimate"
              variants={{
                pageInitial: { opacity: 0 },
                pageAnimate: { opacity: 1 },
              }}
            >
              <Component {...pageProps} />
            </motion.div>
          </Layout>
        )}
      </AuthProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
