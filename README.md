# justask.dev

The motivation behind this website is to provide an easy way for developers new and old to search for those annoying things we all forget.

If you have been googling for an answer to a question and found it then please consider sharing it here so that others might benifit. The goal of this site is growth through community contributions.

To submit a PR:

- Check if the category already exists in the content folder
- If it does exist create your mdx file under that category and name it the question that will be answered. You can check the current mdx files/answers for an example of how to follow the structure
- Try to keep the descriptions to the absolute minimum of what is required to understand the problem and provide the solution. This isnt a blog post!

- If the category doesnt exist create a folder named after the new category in the content folder.
- Create a page in the pages folder with the following naming `myCategory-answers.js`
- Copy paste the contents from one of the other pages and change the graphql query name to reflect the new category, and change the category filter to the new category.

```js
export const query = graphql`
  query MYCATEGORY_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { published: { eq: true }, category: { eq: "myCategory" } }
      }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
          category
        }
        fields {
          slug
        }
      }
    }
  }
`;
```

<!-- - Then add your new category to the `AnswersHeader` component:

```jsx
export default ({ data }) => {
  return (
    <Layout>
      <SEO
        title="JavaScript Answers"
        description={SEODescription}
        keywords={SEOKeywords}
      />
      <AnswersHeader category="myCategory" />
    ....
    ....
    ....
``` -->

- In the index.js, copy paste the last link and direct it to your new category page

```jsx
 <PageLink page="myCategory-answers" title="My Category" />
```

- Add your new category to `gatsby-config.js`

```js
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            path: `${__dirname}/content/myNewCategory`,
            name: 'myNewCategory',
          },
        },
```

When you create a branch it would be great if you could use the question you are answering. :smiley:


## Built With

- [Gatsby](https://www.gatsbyjs.org/)
- [Emotion](https://emotion.sh/docs/introduction)
- [Theme-UI](https://theme-ui.com/)

## Authors

- **Rich Haines** - _Hungry Bear Studio_

## License

This project is licensed under the MIT License
