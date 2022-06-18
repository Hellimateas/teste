import React from "react";

export default function Tarefas() {
  return (
    <ul className="tarefa">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>
            <FaEdit
              onClick={(e) => this.handleEdit(e, index)}
              className="edit"
            />
            <FaWindowClose
              onClick={(e) => this.handleDelete(e, index)}
              className="delete"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}
