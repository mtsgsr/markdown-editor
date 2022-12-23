import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { FileContext } from "../context/FileContext";

const Main = styled.main`
  display: grid;
  height: ${(props) => props.height};
  @media (min-width: 1024px) {
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
  }
`;

const MdHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background-color: ${({ theme }) => theme.headings};
  height: 50px;
  padding: 0 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const PrevHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background-color: ${({ theme }) => theme.headings};
  height: 50px;
  padding: 0 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  @media (min-width: 1024px) {
    border-left: 1px solid ${({ theme }) => theme.border};
  }
`;

const HeadingText = styled.p`
  color: ${({ theme }) => theme.text};
`;

const Section = styled.section`
  display: ${(props) => props.display || "grid"};
  height: inherit;
  background-color: ${({ theme }) => theme.background};
`;

const MdTextArea = styled.textarea`
  height: inherit;
  padding: 1rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  resize: none;
  outline: none;
`;

const Aside = styled.aside`
  display: ${(props) => props.display || "none"};
  height: inherit;
  @media (min-width: 1024px) {
    display: ${(props) => props.default || "grid"};
  }
`;

const Preview = styled.div`
  padding: 1rem;
  height: inherit;
  background-color: ${({ theme }) => theme.background};
  overflow: auto;
  @media (min-width: 1024px) {
    border-left: 1px solid ${({ theme }) => theme.border};
  }
`;

const Eye = styled.div`
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  @media (min-width: 640px) {
    padding: 0.5rem 1rem;
  }
  &:hover {
    background-color: ${({ theme }) => theme.hoverEye};
    border-radius: 4px;
  }
  &:active {
    background-color: ${({ theme }) => theme.hoverEye};
    border-radius: 4px;
    transform: translateY(1px);
  }
`;

const Markdown = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = React.useState(window.innerHeight);
  const [visibility, setVisibility] = React.useState(false);
  const { markdown, setMarkdown } = React.useContext(FileContext);

  React.useEffect(() => {
    const windowResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("load", windowResize);
    window.addEventListener("resize", windowResize);

    return () => {
      window.removeEventListener("load", windowResize);
      window.removeEventListener("resize", windowResize);
    };
  }, [windowWidth, windowHeight]);

  React.useEffect(() => {
    setMarkdown(markdown);
  }, [markdown]);

  return (
    <Main height={windowHeight - 110 + "px"}>
      <Section display={windowWidth < 1024 && visibility ? "none" : null}>
        <MdHeading>
          <HeadingText>Markdown</HeadingText>
          {windowWidth < 1024 && visibility === false ? (
            <Eye onClick={() => setVisibility(!visibility)}>
              <MdVisibility size={25} />
            </Eye>
          ) : (
            ""
          )}
          {windowWidth > 1024 && visibility === true ? (
            <Eye onClick={() => setVisibility(!visibility)}>
              <MdVisibility size={25} />
            </Eye>
          ) : (
            ""
          )}
        </MdHeading>
        <MdTextArea
          value={markdown}
          onChange={({ target }) => setMarkdown(target.value)}
        />
      </Section>
      <Aside
        display={visibility ? "grid" : null}
        default={visibility ? "none" : null}
      >
        <PrevHeading>
          <HeadingText>Preview</HeadingText>
          <Eye onClick={() => setVisibility(!visibility)}>
            <MdVisibilityOff size={25} />
          </Eye>
        </PrevHeading>
        <Preview className="markdown-body">
          <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
        </Preview>
      </Aside>
    </Main>
  );
};

export default Markdown;
