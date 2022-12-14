import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css";
import { BsEye } from "react-icons/bs";
import { FileContext } from "../context/FileContext";

const Headings = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background-color: ${({ theme }) => theme.headings};
  height: 50px;
  padding: 0 1rem;
`;

const MdHeadingText = styled.p`
  color: ${({ theme }) => theme.text};
`;

const PreviewHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.headings};
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const PreviewHeadingText = styled.p`
  display: none;
  color: ${({ theme }) => theme.text};
  @media (min-width: 1024px) {
    display: block;
  }
`;

const Main = styled.main`
  display: grid;
  height: ${(props) => props.height};
  @media (min-width: 1024px) {
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
  }
`;

const MdSection = styled.section`
  display: ${(props) => props.display || "grid"};
  background-color: ${({ theme }) => theme.background};
`;

const MdTextArea = styled.textarea`
  resize: none;
  outline: none;
  padding: 1rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border-right: 1px solid #444;
`;

const PreviewAside = styled.aside`
  display: ${(props) => props.display || "none"};
  height: inherit;
  @media (min-width: 1024px) {
    display: grid;
  }
`;

const Preview = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  overflow: auto;
`;

const Markdown = () => {
  const [markdown, setMarkdown] = React.useState();
  const [windowHeight, setWindowHeight] = React.useState(0);
  const [eye, setEye] = React.useState(false);
  const { fileResult } = React.useContext(FileContext);

  React.useEffect(() => {
    const windowResize = () => {
      setWindowHeight(window.innerHeight);
      setEye(false);
    };

    window.addEventListener("load", setWindowHeight(window.innerHeight));
    window.addEventListener("resize", windowResize);

    return () => {
      window.removeEventListener("load", setWindowHeight(window.innerHeight));
      window.removeEventListener("resize", windowResize);
    };
  }, [windowHeight]);

  React.useEffect(() => {
    setMarkdown(fileResult);
  }, [fileResult]);

  return (
    <>
      <Headings>
        <MdHeadingText>Markdown</MdHeadingText>
        <PreviewHeading>
          <PreviewHeadingText>Preview</PreviewHeadingText>
          <BsEye
            size={25}
            onClick={() => setEye(!eye)}
            style={{ cursor: "pointer" }}
          />
        </PreviewHeading>
      </Headings>
      <Main height={windowHeight - 110 + "px"}>
        <MdSection display={eye ? "none" : null}>
          <MdTextArea
            value={markdown}
            onChange={({ target }) => setMarkdown(target.value)}
          />
        </MdSection>
        <PreviewAside display={eye ? "grid" : null}>
          <Preview className="markdown-body">
            <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
          </Preview>
        </PreviewAside>
      </Main>
    </>
  );
};

export default Markdown;
