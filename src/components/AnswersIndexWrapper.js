/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";
import PostWrapper from "./PostWrapper";
import { Link } from "gatsby";

const Wrapper = styled.main`
  display: grid;
  grid-auto-rows: 150px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1em;
`;

const AnswersIndexWrapper = ({ answers }) => (
  <Wrapper>
    {answers.map(({ id, frontmatter, fields }) => (
      <Link
        sx={{
          textDecoration: "none"
        }}
        key={id}
        to={fields.slug}
      >
        <PostWrapper>
          <h1
            sx={{
              color: "greyBlack",
              fontFamily: "body"
            }}
          >
            {frontmatter.title}
          </h1>
          <p
            sx={{
              color: "greyBlack",
              fontFamily: "body"
            }}
          >
            {frontmatter.date}
          </p>
          <p
            sx={{
              color: "greyBlack",
              fontFamily: "body"
            }}
          >
            {frontmatter.category}
          </p>
        </PostWrapper>
      </Link>
    ))}
  </Wrapper>
);

export default AnswersIndexWrapper;
