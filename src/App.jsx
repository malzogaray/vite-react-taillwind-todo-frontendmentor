import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useState } from "react";

const initialStateTodos = [
    { id: 1, title: "Complete online Javascript Course", completed: true },
    { id: 2, title: "Go to the gym", completed: false },
    { id: 3, title: "10 minutes meditation", completed: true },
    { id: 4, title: "Pick up groceries", completed: false },
    { id: 5, title: "Complete todo app on frontend Mentor", completed: false },
];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);
    const [filter, setFilter] = useState("all");

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    // Filtrado de tareas basado en el filtro seleccionado
    const filteredTodos = todos.filter((todo) => {
        if (filter === "all") {
            return true;
        } else if (filter === "active") {
            return !todo.completed;
        } else if (filter === "completed") {
            return todo.completed;
        }
    });

    return (
        <div className=" dark:bg-gray-900   bg-[url('./assets/images/bg-mobile-light.jpg')]
        bg-contain bg-no-repeat dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]  ">
            <Header />

            <main className="container mx-auto px-4 mt-8">
                <TodoCreate createTodo={createTodo} />

                <TodoList 
                    todos={filteredTodos} // Usa filteredTodos en lugar de todos
                    removeTodo={removeTodo} 
                    updateTodo={updateTodo} 
                />

                <TodoComputed 
                    computedItemsLeft={computedItemsLeft} 
                    clearCompleted={clearCompleted} 
                />

                <TodoFilter setFilter={setFilter} /> {/* Asegúrate de pasar setFilter a TodoFilter */}
            </main>

            <footer className="text-center mt-8 dark:text-gray-400">
                drag and drop to reorder list
            </footer>
        </div>
    );
};

export default App;
