import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `FSM Drawings`,
        short_name: `FSM`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4A74A5`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpg`,
      },
    },
  ],
}

export default config
