/** @jsx jsx */
import { jsx } from "../context";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { Layout } from "../components/Layout";

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

const Introduction = styled.section`
  grid-column: 1 / -1;
  margin-top: 1em;

  & > p {
    overflow-wrap: break-word;
    font-size: 1.5em;
    padding: 1em;
  }

  & > a {
    overflow-wrap: break-word;
    font-size: 1.5em;
    padding: 1em;
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
      <Introduction>
        <p
          sx={{
            color: "greyBlack",
            fontFamily: "body"
          }}
        >
          The motivation behind this website is the storing and categorizing of
          answers to "simple" dev questions. When i first started programming it
          was often the simple things that i wanted to know, like how to open a
          tab from a link. Or how to flattern a nested array.
        </p>
        <p
          sx={{
            color: "greyBlack",
            fontFamily: "body"
          }}
        >
          This being said, the answers here dont have to be mearly for what
          might seem like simple questions. If you have been googling for an
          answer to a question and found it then please consider sharing it here
          so that others might benifit. My hope is that this will grow through
          contributions and become an easy place for devs to go to to quickly
          check how to do stuff.
        </p>
        <p
          sx={{
            color: "greyBlack",
            fontFamily: "body"
          }}
        >
          To submit an answer please open a PR at:{" "}
          <a
            sx={{
              color: "greyBlack",
              fontFamily: "body",
              color: "softBlue"
            }}
            href="https://github.com/molebox/justask.dev"
          >
            https://github.com/molebox/justask.dev
          </a>
        </p>
      </Introduction>
    </Layout>
  );
};
