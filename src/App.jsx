import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [empty, setEmpty] = useState(false);
  const [classError, setClassError] = useState("");
  const [tag, setTag] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTag([...tag, input]);
    setInput("");
    setEmpty(false);
    setClassError("");
  }

  function handleBlur() {
    if (!input) {
      setEmpty(true);
      setClassError("is-error");
    }
  }

  function handleChange(e) {
    setInput(e.target.value);
    setEmpty(false);
    setClassError("borderInput");
  }

  function handleRemove(i) {
    const filtered = tag.filter((tag, index) => {
      if (index === i) {
        return false;
      }
      return true;
    });
    setEmpty(false);
    setTag(filtered);
  }

  return (
    <>
      <form className="main" onSubmit={handleSubmit}>
        {" "}
        <input
          className={classError}
          type="text"
          value={input}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Button type="submit" variant="primary" size="lg" disabled={!input}>
          Отправить
        </Button>
      </form>
      <div className="err-block">
        {empty && <div className="err">Поле ввода не должно быть пустым!</div>}
      </div>
      <div className="tag-block">
        {tag.map((item, index) => {
          return (
            <div key={index} className="tag">
              <div className="textag">{item}</div>
              <button onClick={() => handleRemove(index)} className="btntag">
                ✖
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
