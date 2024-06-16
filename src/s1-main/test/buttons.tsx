// При каждом клике на кнопку Add должна появляться
// новая кнопка со случайным текстом (например цифровым id) При клике на появившуюся кнопку она должна удаляться.

import {useState} from 'react';

function App() {
  const [list, setList] = useState([]);
  const [nextId, setNextId] = useState(0);

  const add = () => {
    setList([...list, nextId]);
    setNextId(nextId + 1);
  };

  const remove = (idToRemove) => {
    setList(list.filter(id => id !== idToRemove));
  };

  return (
    <div>
      <button onClick={add}>Add</button>
      <div>
        {list.map((id) => (
          <button
            key={id}
            onClick={() => remove(id)}
          >
            Button {id}
          </button>
        ))}
      </div>
    </div>
  );
}
