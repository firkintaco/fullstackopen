const NewPerson = ({ newPerson, setNewPerson, handleSubmit }) => {
  const handleChange = (e) => {
    setNewPerson({ ...newPerson, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name:{" "}
        <input onChange={handleChange} value={newPerson.name} name="name" />
        Number:{" "}
        <input onChange={handleChange} name="number" value={newPerson.number} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default NewPerson;
