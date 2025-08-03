import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { useHistory } from "@docusaurus/router";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return <Link to="/docs/intro">Wiki</Link>;
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  // autoredirect to http://localhost:3000/cheese-wiki/docs/intro
  const history = useHistory();
  useEffect(() => {
    history.replace("/cheese-wiki/docs/intro");
  }, [history]);
  return (
    <Layout
      title={siteConfig.title}
      description="Your comprehensive guide to the world of cheese"
    >
      <HomepageHeader />
    </Layout>
  );
}
