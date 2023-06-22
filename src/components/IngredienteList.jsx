const IngredienteList = ({ name, ingredientes, tiempo, image }) => {
  return (
    <>
      <div className="mt-6 mr-4">
        <img className="h-40 w-60 " src={image} alt="" />

        <h1>
          <strong>Receta:</strong>
          {name}
        </h1>
        <h2>
          <strong>Ingredientes:</strong>
        </h2>
        <ul className="list-disc marker:text-sky-400  pl-2 text-slate-500">
          {ingredientes.map((ingrediente, i) => (
            <li key={i} className="py-2 flex">
              {ingrediente.item}
            </li>
          ))}
        </ul>
        <h2>
          <strong>Tiempo de preparación:</strong> {tiempo}
        </h2>
      </div>
    </>
  );
};

export default IngredienteList;
