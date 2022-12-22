import React from "react";
import { MdDescription, MdDelete, MdSaveAlt } from "react-icons/md";
import styled from "styled-components";
import { FileContext } from "../context/FileContext";

const Head = styled.header`
  height: 60px;
  background-color: ${({ theme }) => theme.header};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  @media (min-width: 640px) {
    gap: 1.5rem;
  }
`;

const MenuBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 70px;
  background-color: #35383f;
  cursor: pointer;
  &:before {
    content: "";
    display: inline-block;
    height: 2px;
    width: 25px;
    background-color: ${({ theme }) => theme.menu};
    box-shadow: 0 7px ${({ theme }) => theme.menu},
      0 -7px ${({ theme }) => theme.menu};
  }
  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
  &:active {
    background-color: ${({ theme }) => theme.hover};
    transform: translateY(1px);
  }
`;

const HeadInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  gap: 2rem;
`;

const Wordmark = styled.h1`
  display: none;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  @media (min-width: 1024px) {
    display: block;
  }
`;

const Document = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  &:before {
    content: "";
    display: none;
    position: absolute;
    left: -18px;
    height: 50px;
    width: 1px;
    background-color: ${({ theme }) => theme.border};
  }
  @media (min-width: 1024px) {
    &:before {
      display: block;
    }
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: none;
  color: #aaa;
  font-size: 1rem;
  @media (min-width: 640px) {
    display: block;
  }
  @media (min-width: 1024px) {
    font-size: 0.9rem;
  }
`;

const Title = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  border: none;
  @media (min-width: 640) {
    font-size: 1rem;
  }
  @media (min-width: 1024px) {
    font-size: 0.9rem;
  }
`;

const DocInput = styled.input.attrs({ type: "text" })`
  background-color: ${({ theme }) => theme.header};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  outline: none;
  color: ${({ theme }) => theme.text};
  width: 100%;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  gap: 0.5rem;
  @media (min-width: 640px) {
    margin-right: 1rem;
    gap: 1rem;
  }
`;

const Trash = styled.a`
  color: #aaa;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  @media (min-width: 640px) {
    padding: 0.5rem 1rem;
  }
  &:hover {
    background-color: ${({ theme }) => theme.hover};
    border-radius: 4px;
  }
  &:active {
    background-color: ${({ theme }) => theme.hover};
    border-radius: 4px;
    transform: translateY(1px);
  }
`;

const SaveBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 4px;
  color: ${({ theme }) => theme.menu};
  background-color: ${({ theme }) => theme.accent};
  padding: 0.25rem 0.5rem;
  @media (min-width: 640px) {
    padding: 0.5rem 1rem;
  }
  &:hover {
    background-color: #e68050;
  }
  &:active {
    background-color: #e68050;
    transform: translateY(1px);
  }
`;

const SaveText = styled.span`
  display: none;
  @media (min-width: 640px) {
    display: block;
    font-size: 1rem;
  }
`;

const Header = () => {
  const {
    fileOpened,
    fileName,
    setFileName,
    openFile,
    saveFile,
    deleteFile,
    supported,
  } = React.useContext(FileContext);

  return (
    <Head>
      <MenuBtn onClick={openFile} />
      <HeadInfo>
        <Wordmark>quick md</Wordmark>
        <Document>
          <MdDescription size={25} color="white" />
          <Description>
            <Label id="docLabel">Document Name</Label>
            {fileOpened === false || supported === false ? (
              <DocInput
                value={fileName}
                onChange={({ target }) => setFileName(target.value)}
                aria-labelledby="docLabel"
              />
            ) : (
              <Title>{fileName}</Title>
            )}
          </Description>
        </Document>
      </HeadInfo>
      <Buttons>
        <Trash onClick={deleteFile}>
          <MdDelete size={25} />
        </Trash>
        <SaveBtn onClick={saveFile}>
          <MdSaveAlt size={25} />
          <SaveText>{supported ? "Save" : "Export"}</SaveText>
        </SaveBtn>
      </Buttons>
    </Head>
  );
};

export default Header;
