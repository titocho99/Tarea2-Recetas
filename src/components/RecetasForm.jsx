import { useState } from "react";
const RecetastForm = ({ onSubmit }) => {
  const [formFields, setFormFields] = useState([{ item: "" }]);

  const submit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form[0].value;
    const ingredientes = formFields;
    const tiempo = form[1].value;
    const image =
      "https://www.recetaslamasia.es/wp-content/uploads/2015/11/planning_30nov-4dic_720.png";
    const dato = { name, ingredientes, tiempo, image };
    onSubmit(dato);
    form.reset();
    setFormFields([""]);
  };
  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const addFields = () => {
    let object = {
      item: "",
    };
    setFormFields([...formFields, object]);
  };

  return (
    <form onSubmit={submit}>
      <label className="font-black">Receta: </label>
      <input
        className="border-slate-200 form-input px-2 py-2 rounded-full mr-2"
        type="text"
        placeholder="Nombre de la receta"
      />
      <label className="font-black">Tiempo de preparación: </label>
      <input
        className="border-slate-200 form-input px-2 py-2 rounded-full mr-2"
        type="text"
        placeholder="Tiempo de preparación"
      />

      {formFields.map((form, index) => {
        return (
          <div key={index}>
            <label className="font-black">Ingredientes: </label>
            <input
              className="border-slate-200 form-input px-2 py-2 rounded-full mt-2 mb-2"
              name="item"
              placeholder="Ingrediente"
              onChange={(event) => handleFormChange(event, index)}
              value={form.name}
            />
          </div>
        );
      })}

      <button
        type="button"
        className="rounded-md w-48 px-2 py-2 bg-teal-600 text-white mr-5"
        onClick={addFields}
      >
        Agregar ingrediente{" "}
      </button>
      <button
        type="submit"
        className="rounded-md w-48 px-2 py-2 bg-indigo-500 text-white"
      >
        Guardar receta
      </button>
    </form>
  );
};

export default RecetastForm;
