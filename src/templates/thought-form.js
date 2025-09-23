import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export const Head = ({ data, location }) => {
  const post = data.markdownRemark;
  const fm = post.frontmatter;
  const number = String(fm.release).padStart(3, "0");
  const title = `${fm.title} (ATF${number})`;
  const description = `ATF${number}: ${fm.title} — a Thought Form on the ATF label.`;
  const path = location?.pathname || `/ATF${number}`;
  const [isBack, setIsBack] = React.useState(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": fm.title,
    "genre": "Poem",
    "identifier": `ATF${number}`,
    "inLanguage": "en",
    "datePublished": fm.date,
    "author": fm.authors ? { "@type": "Person", "name": fm.authors } : undefined,
    "isPartOf": {
      "@type": "CreativeWorkSeries",
      "name": "Anomalous Thought Forms"
    },
    "url": `https://anomalous-thought-forms/releases/ATF${number}`
  };

  return (
    <SEO
      title={`ATF${number}`}
      description={description}
      path={path}
      image="/images/logo.png"
      type="article"
    >
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </SEO>
  );
};

export default function ThoughtForm({ data }) {
  const post = data.markdownRemark;
  const fm = post.frontmatter;
  const number = String(fm.release).padStart(3, "0");

  const [isBack, setIsBack] = React.useState(false);
  const [articleHeight, setArticleHeight] = React.useState(0);

  // Optional: apply per-page theme
  React.useEffect(() => {
    if (fm.theme) document.documentElement.setAttribute("data-theme", fm.theme);
  }, [fm.theme]);

  const articleRef = React.useRef(null);
  const [articleH, setArticleH] = React.useState(0);

  React.useLayoutEffect(() => {
    const el = articleRef.current;
    if (!el) return;

    const measure = () => {
      // rendered height in pixels:
      const h = el.getBoundingClientRect().height; // or el.offsetHeight
      setArticleH(h);
      // for a quick check:
      // console.log("article height:", h);
    };

    measure();

    // keep it updated on resize/content changes
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);

    // fonts can change height after they load
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(measure).catch(() => {});
    }

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <Layout showHeader>
      {!isBack ? <article className="tf-sheet" aria-labelledby="tf-title" ref={articleRef}>
        {/* left vertical title */}
        <aside className="tf-rail" aria-hidden={false}>
          <div className="tf-headers"
          >

                      <div className="tf-authors" aria-hidden="true">
            {fm.authors}
          </div>
          <h1 id="tf-title-vertical" className="tf-title-vertical atf-title">
            {fm.title}
          </h1>
          </div>


        </aside>

        <div className="tf-content">
        {/* header row (title + edition meta) */}
        <header className="tf-head">
          <h1 id="tf-title" className="tf-title atf-title">
            {fm.title}
          </h1>
          <div className="tf-meta">
            {/* <div className="tf-code">ANOMALOUS THOUGHT FORM #{fm.release ? fm.release : ""}</div>
            {fm.edition && <div className="tf-edition">{fm.edition}</div>} */}
            <div className="tf-id">ATF{number}</div>
          </div>
        </header>

        {/* poem/body */}
        <section
          className="tf-body"
          // remark already made HTML; preserve breaks via CSS
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        {/* collect button (only if frontmatter.collect exists) */}
        
         {!isBack && <footer className="tf-footer">
            <button className="tf-details" onClick={() => {
              console.log(articleH, articleHeight);
              setArticleHeight(articleH);
              setIsBack(true)
            }
              }>
              Origins
            </button>
            {fm.collect && <a className="tf-collect" href={fm.collect} target="_blank" rel="noopener noreferrer">
              Collect ATF{number}
            </a>}
        </footer>}
        </div>


        
      </article>
      :     
      <div className="tf-sheet tf-back" style={{ height: `${articleHeight}px`}}>
        </div>
      }
    </Layout>
  );
}

export const query = graphql`
  query($release: Int!) {
    markdownRemark(frontmatter: { release: { eq: $release } }) {
      html
      frontmatter {
        title
        release
        date(formatString: "MMMM DD, YYYY")
        authors
        collect
        theme
      }
    }
  }
`;
