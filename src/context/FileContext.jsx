import React from "react";
import {
  fileOpen,
  fileSave,
  supported,
} from "https://unpkg.com/browser-fs-access";

export const FileContext = React.createContext();

export const FileStorage = ({ children }) => {
  const [fileHandle, setFileHandle] = React.useState();
  const [fileName, setFileName] = React.useState("");
  const [markdown, setMarkdown] = React.useState();

  const options = {
    fileName: fileName,
    description: "Markdown/Text file",
    extensions: [".md", ".txt"],
  };

  const openFile = async () => {
    try {
      const file = await fileOpen({
        description: "Markdown/Text file",
        mimeTypes: ["text/markdown", "text/plain"],
        extensions: [".md"],
        excludeAcceptAllOption: true,
      });
      setFileHandle(file.handle);
      setFileName(file.name);
      const content = await file.text();
      setMarkdown(content);
    } catch (e) {
      console.log(e.message);
    }
  };

  // Blob para salvar o conteudo escrito
  const blob = new Blob([markdown], { type: "text/markdown" });

  const save = async () => {
    try {
      await fileSave(blob, options, fileHandle);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <FileContext.Provider
      value={{
        fileName,
        setFileName,
        markdown,
        setMarkdown,
        openFile,
        save,
        supported,
      }}
    >
      {children}
    </FileContext.Provider>
  );
};

export default FileContext;
