module.exports = {
    siteMetadata: {
      title: 'justask.dev'
    },
    plugins: [
        'gatsby-plugin-mdx',
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
              fonts: [
                'Josefin Sans',
                'Poppins',
                'Open Sans',
                'source sans pro\:300,400,400i,700' 
              ]
            }
        },
        {
            resolve: 'gatsby-theme-seo', 
            options: {
                title: 'justask.dev',
                description: 'A website that provides answers to simple dev questions.',
                author: 'Rich Haines',
                siteUrl: 'https://justask.dev',
            }
        },
        'gatsby-plugin-emotion',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-robots-txt'
    ]
  }