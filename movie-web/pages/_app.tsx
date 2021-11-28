import "../styles/globals.css";
import "antd/dist/antd.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "antd";
import { ApolloProvider } from "@apollo/client";

// lib
import client from "./../lib/apollo-client";
import DialogProvider from "../context/Dialog";
import MovieProvider from "../context/Movie";

// components
import Sider from "./../components/Sider";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { Content } = Layout;

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <ApolloProvider client={client}>
        <MovieProvider>
          <DialogProvider initialState={{}}>
            <Layout style={{ minHeight: "100vh" }}>
              <Sider />
              <Layout className="site-layout">
                <Content className="content-layout">
                  <div className="site-layout-background">
                    <Component {...pageProps} />
                  </div>
                </Content>
              </Layout>
            </Layout>
          </DialogProvider>
        </MovieProvider>
      </ApolloProvider>
    </>
  );
};

export default MyApp;
