import React from "react";
import {
  fileOpen,
  fileSave,
  supported,
} from "https://unpkg.com/browser-fs-access";

export const FileContext = React.createContext();

export const FileStorage = ({ children }) => {
  const [fileOpened, setFileOpened] = React.useState(false);
  const [fileHandle, setFileHandle] = React.useState("");
  const [fileName, setFileName] = React.useState("");
  const [markdown, setMarkdown] = React.useState("");

  const options = {
    fileName: supported ? fileName : fileName + ".md",
    description: "Markdown file",
    extensions: [".md"],
  };

  const openFile = async () => {
    try {
      const file = await fileOpen({
        description: "Markdown file",
        mimeTypes: ["text/markdown"],
        extensions: [".md"],
      });
      setFileOpened(true);
      setFileHandle(file.handle);
      setFileName(file.name.split(".")[0]);
      const content = await file.text();
      setMarkdown(content);
    } catch (e) {
      console.log(e.message);
    }
  };

  // Blob para salvar o conteudo escrito
  const blob = new Blob([markdown], { type: "text/markdown" });

  const saveFile = async () => {
    try {
      await fileSave(blob, options, fileHandle);
    } catch (e) {
      console.log(e.message);
    }
  };

  const deleteFile = () => {
    setFileOpened(false);
    setFileHandle("");
    setFileName("");
    setMarkdown("");
  };

  return (
    <FileContext.Provider
      value={{
        fileOpened,
        fileName,
        setFileName,
        markdown,
        setMarkdown,
        openFile,
        saveFile,
        deleteFile,
        supported,
      }}
    >
      {children}
    </FileContext.Provider>
  );
};

export default FileContext;
