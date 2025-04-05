// Importamos las traducciones
import ingles from "./en.json";
import spanish from "./es.json";
import catalan from "./ca.json";

const LENGUAGES = {
  INGLES: "en",
  SPANISH: "es",
  CATALAN: "ca",
};

export const getI18n = ({
  currentLocale = "es",
}: {
  currentLocale: string | undefined;
}) => {
  switch (currentLocale) {
    case LENGUAGES.INGLES:
      return ingles;
    case LENGUAGES.SPANISH:
      return spanish;
    case LENGUAGES.CATALAN:
      return catalan;
    default:
      return spanish;
  }
};
