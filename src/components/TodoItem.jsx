import CrossIcon from './icons/CrossIcon'; // Asegúrate de que la ruta sea correcta
import IconCheck from './icons/IconCheck';

const TodoItem = ({ todo , removeTodo, updateTodo}) => {
  const { id, title, completed } = todo;

  return (
    <article className=" flex gap-4 py-4 border-b-gray-400 dark:bg-gray-800 border-b px-4">
      {/* Botón para marcar como completado */}
      <button
        className={`h-5 w-5 rounded-full border-2 ${
          completed
           ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" : "border-gray-400"
        }`}
        onClick={ () => updateTodo(id) }
      >
        {completed && <IconCheck />}
      </button>

      {/* Título de la tarea */}
      <p className={'text-gray-600 dark:text-gray-400 grow ${completed && "line-through}'} >
        {title}</p>

      {/* Botón para eliminar */}
      <button className="flex-none" onClick={() => removeTodo(id) } >
        <CrossIcon />
      </button>
    </article>
  );
};

export default TodoItem;
