import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { BlogProvider } from '@site/src/context/BlogContext';
import MainBlog from '@site/src/components/MainBlog';
import BottomBlogs from '@site/src/components/BottomBlogs';

export default function Blogs(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Blogs - ${siteConfig.title}`}
      description="Blogs from the community and the team."
    >
      <main>
        <BlogProvider>
          <MainBlog />
          <BottomBlogs />
        </BlogProvider>
      </main>
    </Layout>
  );
}
