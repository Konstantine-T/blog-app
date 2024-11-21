import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./components/layout/DefaultLayout";
import HomePage from "./pages/home";
import About from "./pages/about";
import Write from "./pages/write";
import Login from "./pages/login";
import Register from "./pages/register";
import { ThemeProvider } from "./components/theme/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/write" element={<Write />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
