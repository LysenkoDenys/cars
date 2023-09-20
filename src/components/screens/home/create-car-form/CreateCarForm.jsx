import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./CreateCarForm.module.css";

const clearData = { name: "", price: "", image: "" };

const CreateCarForm = ({ setCarsNew }) => {
  const [data, setData] = useState({ name: "", price: "", image: "" });

  const { register, reset } = useForm({
    mode: "onChange",
  });

  const createCar = (event) => {
    event.preventDefault();
    setCarsNew((prev) => [{ id: prev.length + 1, ...data }, ...prev]);
    setData(clearData); //clear fields after adding a car
  };

  return (
    <form className={styles.form}>
      <h2>Create new car:</h2>
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
        placeholder="Image (URL)"
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
