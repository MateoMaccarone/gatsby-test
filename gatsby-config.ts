import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Crafting Digital Products for companies and startups.`,
        siteUrl: `https://braintly.com`,
    },
    graphqlTypegen: false,
    plugins: [
        "gatsby-plugin-styled-components",
        "gatsby-plugin-sass",
        "gatsby-plugin-react-helmet",
        "gatsby-react-router-scroll",
        "gatsby-plugin-image",
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: ["G-LC5431SFP9"],
                gtagConfig: {
                    anonymize_ip: true,
                    cookie_expires: 0,
                },
                pluginConfig: {
                    head: false,
                    respectDNT: true,
                    exclude: [],
                    delayOnRouteUpdate: 0,
                },
            },
        },
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                color: `#48ffcb`,
                showSpinner: true,
            },
        },
        {
            resolve: `gatsby-source-datocms`,
            options: {
                apiToken: `0069c4ddb81271692663c5a1b17009`,
                preview: false,
                disableLiveReload: false,
            },
        }
    ],
};

export default config;
