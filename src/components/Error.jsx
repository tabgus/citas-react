const Error = ({ mensaje }) => {
  return (
    <div className="border border-red-600 mb-2 text-red-600 font-black text-center rounded-md p-2">
      <p>{mensaje}</p>
    </div>
  );
};

export default Error;
