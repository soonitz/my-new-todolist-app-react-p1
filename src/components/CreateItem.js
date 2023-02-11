import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateItem() {
  const [values, setValues] = useState({
    task: "",
    subject: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  });

  const onSubmit = (event) => {
    event.preventDefault();

    fetch(`${process.env.REACT_APP_BACKEND_API_URI}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: values.task,
        subject: values.subject,
        status: "todo",
      }),
    }).then((res) => {
      if (res.ok) {
        alert("새로운 할 일이 추가되었습니다!");
        navigate("/todo");
      }
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <p>할 일</p>
        <input
          type="text"
          name="task"
          value={values.task}
          onChange={handleChange}
          ref={ref}
        />
        <p>능력치</p>
        <input
          type="radio"
          name="subject"
          value="체력"
          onChange={handleChange}
        />
        <label for="체력">체력</label>
        <input
          type="radio"
          name="subject"
          value="재미"
          onChange={handleChange}
        />
        <label for="재미">재미</label>
        <input
          type="radio"
          name="subject"
          value="지능"
          onChange={handleChange}
        />
        <label for="지능">지능</label>
        <input
          type="radio"
          name="subject"
          value="여유"
          onChange={handleChange}
        />
        <label for="여유">여유</label>
        <input
          type="radio"
          name="subject"
          value="체중"
          onChange={handleChange}
        />
        <label for="체중">체중</label>
      </div>
      <button>할 일 추가</button>
    </form>
  );
}
