/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
// gatsby-ssr.js
import React from "react";

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      key="atf-theme-init"
      dangerouslySetInnerHTML={{
        __html: `
(function(){
  try{
    var t = localStorage.getItem('atf-theme') || 'decoherence-zone';
    document.documentElement.setAttribute('data-theme', t);
  }catch(e){}
})();`,
      }}
    />,
  ]);
};


