import { useForm } from "../hooks/useForm";

const Form = ({ setCharacterName }) => {
  const [inputs, handleChange, reset] = useForm({
    name: "",
  });
  const { name } = inputs;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      console.log(name);
      setCharacterName(name.trim().toLowerCase());
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={handleChange}
        type="text"
        placeholder="Ingresa el nombre de un personaje"
        className="form-control mb-2"
        name="name"
      />
      <button type="submit" className="btn btn-dark">
        Buscar
      </button>
    </form>
  );
};

export default Form;
