import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { TodoProvider } from "@context/todos/TodoProvider";
function App() {
  return (
    <BrowserRouter>
      <TodoProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </TodoProvider>
    </BrowserRouter>
  );
}

export default App;
