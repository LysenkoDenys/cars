import { useState } from "react";
import styles from "./CreateCarForm.module.css";

const clearData = { name: "", price: "", image: "" };

const CreateCarForm = ({ setCarsNew }) => {
  const [data, setData] = useState({ name: "", price: "", image: "" });

  const createCar = (event) => {
    event.preventDefault();
    setCarsNew((prev) => [{ id: prev.length + 1, ...data }, ...prev]);
    setData(clearData); //clear fields after adding a car
  };

  return (
    <form className={styles.form}>
      <input
        placeholder="Name"
        onChange={(event) =>
          setData((prev) => ({
            ...prev,
            name: event.target.value,
          }))
        }
        value={data.name}
      />
      <input
        placeholder="Price"
        onChange={(event) =>
          setData((prev) => ({
            ...prev,
            price: event.target.value,
          }))
        }
        value={data.price}
      />
      <input
        placeholder="Image"
        onChange={(event) =>
          setData((prev) => ({
            ...prev,
            image: event.target.value,
          }))
        }
        value={data.image}
      />
      <button onClick={(event) => createCar(event)} className="btn">
        Create
      </button>
    </form>
  );
};

export default CreateCarForm;
