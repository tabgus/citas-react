import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  //console.log(pacientes);
  return (
    <div className="md:w-3/4 lg:w-4/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de Pacientes
          </h2>

          <p className="text-xl mt-5 mb-2 text-center">
            Administra tus{" "}
            <span className="text-fuchsia-600 font-bold">
              Pacientes y citas
            </span>
          </p>
          <div className="md:grid md:grid-cols-2">
            {pacientes.map((paciente) => (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Agrega tus pacientes{" "}
            <span className="text-fuchsia-600 font-bold">
              y gestionalos aquí
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
