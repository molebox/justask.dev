/** @jsx jsx */
import { jsx } from "../context";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { Layout } from "../components/Layout";

const IndexWrapper = styled.main``;

const PostWrapper = styled.div``;

const Categories = styled.div`
  display: grid;
  grid-auto-rows: 100px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1em;
`;

const CategoryBox = styled.div`
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;

  & > h3 {
    font-size: 1.2em;
  }

  // Desktop
  @media (min-width: 48em) {
    & > h3 {
      font-size: 1.7em;
    }
  }
`;

export default () => {
  return (
    <Layout>
      <Categories>
        <Link
          sx={{
            textDecoration: "none"
          }}
          to="/css-answers"
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
              CSS
            </h3>
          </CategoryBox>
        </Link>
        <Link
          sx={{
            textDecoration: "none",
            fontFamily: "body"
          }}
          to="/html-answers"
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
              HTML
            </h3>
          </CategoryBox>
        </Link>
        <Link
          sx={{
            textDecoration: "none"
          }}
          to="react-answers"
        >
          <CategoryBox
            sx={{
              backgroundColor: "softRed",
              fontFamily: "body"
            }}
          >
            <h3
              sx={{
                color: "greyBlack",
                fontFamily: "body"
              }}
            >
              React
            </h3>
          </CategoryBox>
        </Link>
        <Link
          sx={{
            textDecoration: "none"
          }}
          to="gatsby-answers"
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
              Gatsby
            </h3>
          </CategoryBox>
        </Link>
        <Link
          sx={{
            textDecoration: "none"
          }}
          to="git-answers"
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
              Git
            </h3>
          </CategoryBox>
        </Link>
        <Link
          sx={{
            textDecoration: "none"
          }}
          to="javascript-answers"
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
              JavaScript
            </h3>
          </CategoryBox>
        </Link>
      </Categories>
    </Layout>
  );
};
