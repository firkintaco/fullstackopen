import { useEffect, useState } from "react";
import NewPerson from "./NewPerson";
import PhoneBook from "./PhoneBook";
import Filter from "./Filter";
import personService from "./phonebook/persons";
import Notification from "./Notification";

function App() {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const showPeople = persons.filter((person) => {
    if (filter === "") return persons;
    return person.name.toLowerCase().includes(filter.toLowerCase());
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const personExists = persons.find(
      (person) => person.name === newPerson.name
    );
    console.log(personExists);
    if (personExists) {
      if (
        window.confirm(
          `${newPerson.name} is already added to phonebook, replace the old number with new one?`
        )
      ) {
        personService
          .update(personExists.id, newPerson)
          .then((editedPerson) => {
            setSuccessMsg(`Updated ${editedPerson.data.name}'s number`);
            setTimeout(() => {
              setSuccessMsg(null);
            }, 5000);
            setPersons(
              persons.map((kontakti) =>
                editedPerson.data.id !== kontakti.id
                  ? kontakti
                  : editedPerson.data
              )
            );
          })
          .catch((error) => {
            setErrorMsg(
              `Information of ${personExists.name} has already been removed from server`
            );
            setTimeout(() => {
              setErrorMsg(null);
            }, 5000);
          });
      }
    } else {
      personService
        .create(newPerson)
        .then((res) => {
          setSuccessMsg(`Added ${res.data.name}`);
          setTimeout(() => {
            setSuccessMsg(null);
          }, 2000);
          setPersons(persons.concat(res.data));
        })
        .catch((error) => {
          setErrorMsg(error.response.data.error);
          setTimeout(() => {
            setErrorMsg(null);
          }, 5000);
        });
    }
  };
  const handleDelete = (id) => {
    if (
      window.confirm("Are you sure you want delete person with id " + id + "?")
    ) {
      personService
        .deletePerson(id)
        .then((res) => {
          setSuccessMsg("Deleted with id " + id);
          setTimeout(() => {
            setSuccessMsg(null);
          }, 5000);
        })
        .catch((error) => {
          setErrorMsg(`Contact with id ${id} not exists`);
          setTimeout(() => {
            setErrorMsg(null);
          }, 5000);
        });
      setPersons(persons.filter((person) => person.id !== id));
    }
  };

  useEffect(() => {
    personService.getAll().then((res) => setPersons(res.data));
  }, []);
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification errorMsg={errorMsg} successMsg={successMsg} />
      <Filter setFilter={setFilter} filter={filter} />

      <NewPerson
        handleSubmit={handleSubmit}
        newPerson={newPerson}
        setNewPerson={setNewPerson}
      />
      <h2>Numbers</h2>
      <PhoneBook peoples={showPeople} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
