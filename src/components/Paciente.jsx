import Swal from "sweetalert2";

function Paciente({ paciente, setPaciente, eliminarPaciente }) {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    // const respuesta = confirm("Quieres eliminar éste paciente");
    // if (respuesta) {
    //   eliminarPaciente(id);
    // }

    Swal.fire({
      title: "¿Quieres eliminar éste registro",
      //text: "You won't be able to revert this!",
      icon: "warning",
      iconColor: "#4FFF33",
      showCancelButton: true,
      cancelButtonColor: "blue",
      cancelButtonText: "NO",
      confirmButtonText: "Sí",
      confirmButtonColor: "#FE04E0",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarPaciente(id);
        Swal.fire("Información", "Registro eliminado", "success");
      }
    });
  };

  return (
    <div className=" mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de Alta: <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex justify-between">
        <button
          type="button"
          className="py-2 px-5 bg-fuchsia-500 text-white font-black uppercase rounded-lg hover:bg-fuchsia-600 mt-5"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-5 bg-red-700 hover:bg-red-800 text-white font-black uppercase rounded-lg mt-5"
          onClick={handleEliminar}
        >
          Borrar
        </button>
      </div>
    </div>
  );
}

export default Paciente;
