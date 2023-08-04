import React from "react";

import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const ToDo = ({ text, updateMode, deleteToDo }) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteToDo} />
        <Checkbox value={checked} onChange={handleChange} />
      </div>
    </div>
  );
};

const Checkbox = ({ value, onChange }) => {
  return (
    <label>
      <input type="checkbox" id="input" checked={value} onChange={onChange} />
    </label>
  );
};

export default ToDo;
