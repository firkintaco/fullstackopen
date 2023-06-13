import React from "react";

const PhoneBook = ({ peoples, handleDelete }) => {
  return (
    <table>
      <tbody>
        {peoples.map((person) => (
          <tr key={person.name}>
            <td>{person.name}</td>
            <td>{person.number}</td>
            <td>
              <button onClick={() => handleDelete(person.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PhoneBook;
