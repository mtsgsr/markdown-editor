const language = {
  en: {
    doc: "Document Name",
    saveBtn: "Save",
    export: "Export",
  },
  ptBR: {
    doc: "Nome do documento",
    saveBtn: "Salvar",
    export: "Exportar",
  },
};

export const lang = navigator.language || navigator.userLanguage;

export const changeLang = () => {
  document.documentElement.lang = lang;
  if (lang === "pt-BR") {
    document
      .getElementsByTagName("meta")
      .namedItem("description")
      .setAttribute(
        "content",
        "Quick MD é um editor de markdown no navegador."
      );
    return language.ptBR;
  } else {
    return language.en;
  }
};
