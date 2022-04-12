import "../styles/css/style.css";
import Layout from "../components/Base/Layout";
import { AuthProvider } from "../context/authContext";
import { AuthGuard } from "../components/Admin/AuthGuard";
import { appWithTranslation } from "next-i18next";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <>
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
