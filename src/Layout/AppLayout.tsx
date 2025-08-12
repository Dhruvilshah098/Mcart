import React from "react";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  overflow: "auto",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
};

const layoutStyle = {
  overflow: "hidden",
  height: "100vh",
};

type AppLayoutProps = {
  children?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
};

function appLayout({ children, header, footer = <>Footer</> }: AppLayoutProps) {
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>{header}</Header>
      <Content style={contentStyle}>{children}</Content>
      <Footer style={footerStyle}>{footer}</Footer>
    </Layout>
  );
}

export default appLayout;
