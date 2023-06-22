import React from "react";

import { useState, useEffect } from "react";
import IngredienteList from "./IngredienteList";
import RecetastForm from "./RecetasForm";

const RecetasList = ({ title }) => {
  const [recetasCount, setRecetasCount] = useState(0);
  const [datos, setDatos] = useState([
    {
      name: "Coctel de Camarón",
      ingredientes: [
        { item: "cilantro" },
        { item: "jitomate" },
        { item: "camaron" },
        { item: "salsa de tomate" },
      ],
      tiempo: "45 minutos",
      image:
        "https://cdn7.kiwilimon.com/recetaimagen/29699/960x640/31115.jpg.jpg",
    },
    {
      name: "Pie de Limón",
      ingredientes: [
        { item: "30 Galletas marías molidas" },
        { item: "1 Barra de mantequilla fundida (90 g)" },
        { item: "1 Lata de Leche Condensada LA LECHERA®" },
        { item: "1 Lata de Leche Evaporada CARNATION® CLAVEL® " },
      ],
      tiempo: "30 minutos",
      image:
        "https://www.gourmet.cl/wp-content/uploads/2016/09/Pie-de-Limon-web-570x458.jpg",
    },
    {
      name: "Tacos al Pastor",
      ingredientes: [
        { item: "Tortillas" },
        { item: "Cebolla" },
        { item: "Cilantro" },
        { item: "Carne de res en trozos" },
      ],
      tiempo: "1 hora",
      image:
        "https://recetinas.com/wp-content/uploads/2017/09/tacos-al-pastor-.jpg.webp",
    },
  ]);

  const addDatos = (dato) => {
    setDatos([...datos, dato]);
  };

  useEffect(() => {
    setRecetasCount(datos.length);
  }, [datos]);

  return (
    <>
      <h1 className="text-2xl text-center mb-5 ">
        {title}, {recetasCount}
      </h1>
      <RecetastForm onSubmit={addDatos} datos={datos} />
      <div className="grid grid-cols-4 divide-x mr-4">
        {datos.map((dato, i) => (
          <IngredienteList key={i} {...dato} />
        ))}
      </div>
    </>
  );
};

export default RecetasList;
