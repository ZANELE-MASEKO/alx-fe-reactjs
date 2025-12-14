import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import "@testing-library/jest-dom";

describe("TodoList Component", () => {
  
  test("renders initial demo todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Understand React Router")).toBeInTheDocument();
  });

  
  test("adds a new todo item", () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Todo Item" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Todo Item")).toBeInTheDocument();
  });


  test("toggles a todo between completed and not completed", () => {
    render(<TodoList />);
    
    const todo = screen.getByText("Learn React");

    
    expect(todo).toHaveStyle("text-decoration: none");

    fireEvent.click(todo);

   
    expect(todo).toHaveStyle("text-decoration: line-through");

    fireEvent.click(todo);

    
    expect(todo).toHaveStyle("text-decoration: none");
  });


  test("deletes a todo item", () => {
    render(<TodoList />);
    
    const todo = screen.getByText("Build a Todo App");
    const deleteButton = screen.getAllByText("Delete")[1];
    fireEvent.click(deleteButton);

    expect(todo).not.toBeInTheDocument();
  });
});
