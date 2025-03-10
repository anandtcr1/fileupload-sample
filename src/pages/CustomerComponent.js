import { useDispatch, useSelector } from "react-redux";
import {
  updateField,
  setFile,
  submitForm,
  resetForm,
} from "../features/formSlice";

const CustomerComponent = () => {
  const dispatch = useDispatch();
  const { name, gender, country, comments, file, status, error } = useSelector(
    (state) => state.form
  );

  const handleChange = (e) => {
    dispatch(updateField({ name: e.target.name, value: e.target.value }));
  };

  const handleFileChange = (e) => {
    dispatch(setFile(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm({ name, gender, country, comments, file }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:{" "}
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>

      <fieldset>
        <legend>Gender:</legend>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={handleChange}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={handleChange}
          />{" "}
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="other"
            checked={gender === "other"}
            onChange={handleChange}
          />{" "}
          Other
        </label>
      </fieldset>

      <label>
        Country:
        <select name="country" value={country} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
      </label>

      <label>
        Comments:{" "}
        <textarea name="comments" value={comments} onChange={handleChange} />
      </label>

      <label>
        Upload Excel File:
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileChange}
          required
        />
      </label>

      <button type="submit" disabled={status === "loading"}>
        Submit
      </button>

      {status === "loading" && <p>Submitting...</p>}
      {status === "succeeded" && <p>Form submitted successfully!</p>}
      {status === "failed" && <p>Error: {error}</p>}
    </form>
  );
};

export default CustomerComponent;
