
export const DisponibleWarning = (plato) => {
    if (plato.disponible) {
      return {
        display: "none",
      };
    }
  };

 export const DisponibleImg = (plato) => {
    if (!plato.disponible) {
      return {
        filter: "blur(4px)",
      };
    }
  };