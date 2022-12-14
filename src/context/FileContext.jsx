import React from "react";

export const FileContext = React.createContext();

export const FileStorage = ({ children }) => {
  const [fileResult, setFileResult] = React.useState("");
  const [fileName, setFileName] = React.useState("");

  const readFile = () => {
    const input = document.querySelector('input[type="file"]');
    const file = input.files[0];
    const reader = new FileReader();
    reader.fileName = file.name;
    reader.readAsText(file);
    reader.onload = () => {
      setFileResult(reader.result);
      setFileName(reader.fileName);
    };
  };

  return (
    <FileContext.Provider
      value={{ fileResult, setFileResult, fileName, setFileName, readFile }}
    >
      {children}
    </FileContext.Provider>
  );
};

export default FileContext;
