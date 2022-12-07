import React from "react";
import { BiFileBlank, BiSave, BiTrash } from "react-icons/bi";
import styled from "styled-components";

const Head = styled.header`
  height: 60px;
  background-color: ${({ theme }) => theme.header};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  @media (max-width: 300px) {
    gap: 0.5rem;
  }
`;

const Menu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 70px;
  background-color: #35383f;
  &:before {
    content: "";
    display: inline-block;
    height: 2px;
    width: 25px;
    background-color: ${({ theme }) => theme.menu};
    box-shadow: 0 6px ${({ theme }) => theme.menu},
      0 -6px ${({ theme }) => theme.menu};
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  gap: 2rem;
`;

const Markdown = styled.h1`
  display: none;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  @media (min-width: 1024px) {
    display: block;
  }
`;

const Doc = styled.div`
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
    background-color: #444;
  }
  @media (min-width: 1024px) {
    &:before {
      display: block;
    }
  }
`;

const DocInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const DocLabel = styled.p`
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

const DocTitle = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  @media (min-width: 640) {
    font-size: 1rem;
  }
  @media (min-width: 1024px) {
    font-size: 0.9rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-right: 1rem;
  @media (max-width: 300px) {
    margin-right: 0.5rem;
    gap: 0.5rem;
  }
`;

const Trash = styled.a`
  color: #aaa;
  padding: 0.5rem 1rem;
  @media (max-width: 300px) {
    padding: 0.25rem 0.5rem;
  }
`;

const SaveBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  color: ${({ theme }) => theme.menu};
  background-color: ${({ theme }) => theme.accent};
  @media (max-width: 300px) {
    padding: 0.25rem 0.5rem;
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
  return (
    <Head>
      <Menu />
      <Info>
        <Markdown>Markdown</Markdown>
        <Doc>
          <BiFileBlank size={20} color="white" />
          <DocInfo>
            <DocLabel>Document Name</DocLabel>
            <DocTitle>Teste.md</DocTitle>
          </DocInfo>
        </Doc>
      </Info>
      <Buttons>
        <Trash href="#">
          <BiTrash size={25} />
        </Trash>
        <SaveBtn>
          <BiSave size={25} />
          <SaveText>Save Changes</SaveText>
        </SaveBtn>
      </Buttons>
    </Head>
  );
};

export default Header;
