import "../styles/css/style.css";
import Layout from "../components/Base/Layout";
import { AuthProvider } from "../context/authContext";
import { AuthGuard } from "../components/Admin/AuthGuard";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        {Component.requireAuth ? (
          <AuthGuard>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AuthGuard>
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </AuthProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
