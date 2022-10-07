import { useState } from "react";

const initialFormValues = { fullname: "" };

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "") {
      return false;
    }
    addContact([...contacts, form]);

    setForm(initialFormValues);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="form">
        <input
          name="fullname"
          placeholder="Full Name"
          value={form.fullname}
          onChange={onChangeInput}
        />
      </div>
      <div className="btn">
        <button className="btn">Add</button>
      </div>
    </form>
  );
}

export default Form;
