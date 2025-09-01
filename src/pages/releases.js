import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import sigil from "../images/logo.png"; // your PNG
import SEO from "../components/seo";

export const Head = () => (
  <SEO
    title="RELEASES"
    description="Gifts of art, poetry and other anomalous thought forms released into the ether."
    path="/"
    noindex
    canonical="https://anomalousthoughtforms.com/releases"
  />
);

export default function HomePage({ data }) {
  React.useEffect(() => { document.body.style.overflow = ""; }, []);
  const items = data.allMarkdownRemark.nodes;

  return (
    <Layout showHeader>
      <section className="hero" />

      <section className="tf-grid">
        {items.map(n => {
          const num = String(n.frontmatter.release).padStart(3, "0");
          return (
            <Link key={num} to={`/releases/ATF${num}`} className="tf-card" aria-label={`ATF${num} — ${n.frontmatter.title}`}>
              <div className="tf-card__inner">
                <div className="tf-meta">
                    <div className="tf-id">ATF{num}</div>

                </div>
                {/* tiny poem preview */}
                {/* <div className="tf-card__poem" aria-hidden="true">
                  {n.html}
                </div> */}
                 <div className="tf-card__sigil" aria-hidden="true">
                    <img src={sigil} alt="" />
                </div>

                <div className="tf-card__hover">
                  <div className="tf-card__title">{n.frontmatter.title}</div>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </Layout>
  );
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/thought-forms/" } }
      sort: { frontmatter: { release: ASC } }
    ) {
      nodes {
        html
        frontmatter {
          title
          release
        }
      }
    }
  }
`;
