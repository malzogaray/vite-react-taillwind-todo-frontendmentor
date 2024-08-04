const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
  return (
    <section className=" dark:bg-green-800 py-4 px-4 flex justify-between bg-white rounded-b-md">
      <span className="text-gray-400">
        {computedItemsLeft} item left
      </span>
      <button className="text-gray-400" onClick={clearCompleted}>
        Clear Completed
      </button>
    </section>
  );
};

export default TodoComputed;
