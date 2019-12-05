# justask.dev

The motivation behind this website is the storing and categorizing of answers to "simple" dev questions. When i first started programming it was often the simple things that i wanted to know, like how to open a tab from a link. Or how to flattern a nested array. 

This being said, the answers here dont have to be mearly for what might seem like simple questions. If you have been googling for an answer to a question and found it then please consider sharing it here so that others might benifit. My hope is that this will grow through contributions and become an easy place for devs to go to to quickly check how to do stuff.

To submit a PR:

- Check if the category already exists in the content folder
- If it does exist create your mdx file under that category and name it the question that will be answered. You can check the current mdx files/answers for an example of how to follow the structure, but it will go something like this:

Example: 

```
---
title: How to remove blue underline from link
date: 2019-12-04
published: true
category: css
---
import Text from '../../src/components/Text'

<Text>To remove the default blue underline from an anchor tag add: </Text>

```html
text-decoration: 'none'
```
<Text>Example usage with inline styling</Text>

```html react-live

<a href="somewhere-cool" style={{textDecoration: 'none'}}>I have no underline!</a>

```
```
- Try to keep the descriptions to the absolute minimum of what is required to understand the problem and provide the solution. This isnt a blog post!

- If the category doesnt exist create a folder named after the new category in the content folder.
- Create a page in the pages folder with the following naming `myCategory-answers.js`
- Copy paste the contents from one of the other pages and change the graphql query name to reflect the new category, and change the category filter to the new category.

```
export const query = graphql`
  query MYNEWCATEGORY_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { published: { eq: true }, category: { eq: "myNewCategory" } }
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
- In the index.js, copy paste the last link and direct it to your new category page

```
        <Link
          sx={{
            textDecoration: "none"
          }}
          to="myNewCategory-answers"
        >
          <CategoryBox
            sx={{
              backgroundColor: "softRed"
            }}
          >
            <h3
              sx={{
                color: "greyBlack",
                fontFamily: "body"
              }}
            >
              My New Category
            </h3>
          </CategoryBox>
        </Link>
```




## Built With

- [Gatsby](https://www.gatsbyjs.org/)
- [Emotion](https://emotion.sh/docs/introduction)
- [Theme-UI](https://theme-ui.com/)

## Authors

- **Rich Haines** - _Hungry Bear Studio_

## License

This project is licensed under the MIT License