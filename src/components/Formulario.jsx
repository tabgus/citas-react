import React, { useEffect, useState } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(30).substr(2);
    const fecha = Date.now().toString(30);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validanado formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      //console.log("hay campos vacíos");
      setError(true);
      return;
    }
    setError(false);

    //Objeto de paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      //Editando registro
      objetoPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      //creando registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    //Reiniciar Form
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/4 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y{" "}
        <span className="text-fuchsia-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-5 px-5 mb-5"
      >
        {error && <Error mensaje="Todos los campos son obligatorios" />}
        <div className="md:grid md:grid-cols-3 mb-3 bg-gray-50 py-1 px-1 rounded">
          <label
            htmlFor="mascota"
            className="block text-gray-500 font-semibold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de Mascota"
            className="col-span-2 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="md:grid md:grid-cols-3 mb-3 bg-gray-50 py-1 px-1 rounded">
          <label
            htmlFor="propietario"
            className="block text-gray-500 font-semibold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre de Propietario"
            className="col-span-2 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="md:grid md:grid-cols-3 mb-3 bg-gray-50 py-1 px-1 rounded">
          <label htmlFor="email" className="block text-gray-500 font-semibold">
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="Email de contacto"
            className="md:col-span-2 w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="md:grid md:grid-cols-3 mb-3 bg-gray-50 py-1 px-1 rounded">
          <label htmlFor="alta" className="block text-gray-500 font-semibold">
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="md:col-span-2 w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="md:grid md:grid-cols-3 mb-3 bg-gray-50 py-1 px-1 rounded">
          <label
            htmlFor="sintomas"
            className="w-1/3 block text-gray-500 font-semibold"
          >
            Síntomas
          </label>
          <textarea
            id="sintomas"
            className="md:col-span-2 w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los síntomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-fuchsia-700 w-full p-3 text-white uppercase font-bold rounded hover:bg-fuchsia-600 cursor-pointer transition-colors"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
