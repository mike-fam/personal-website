/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
        "gatsby-plugin-typescript",
        {
            resolve: "@chakra-ui/gatsby-plugin",
            options: {
                /**
                 * @property {boolean} [isResettingCSS=true]
                 * if false, this plugin will not use `<CSSReset />
                 */
                isResettingCSS: true,
                /**
                 * @property {boolean} [isUsingColorMode=true]
                 * if false, this plugin will not use <ColorModeProvider />
                 */
                isUsingColorMode: true,
            },
        },
    ],
};
