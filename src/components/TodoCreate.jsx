import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
         return setTitle(""); 
    }

    // Llama a la función createTodo con el nuevo título
    createTodo(title);
    setTitle("");
  };

  return (
    <form 
          onSubmit={handleSubmitAddTodo} 
          className="mt-8 py-4  dark:bg-green-800
          px-4 bg-white rounded-md overflow-hidden 
          flex gap-4 items-center"
          >
          <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
      <input 
        type="text" 
        placeholder="Create a new todo..."
        className="w-full text-gray-400 outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Corregir la sintaxis aquí
      />
    </form>
  );
};

export default TodoCreate;
