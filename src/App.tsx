import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Layout>
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
}
