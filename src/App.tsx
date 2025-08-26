import ProfileCard from "./components/ProfileCard";
import RightMenu from "./components/RightMenu";
import MobileDrawer from "./components/MobileDrawer";

// sections
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <RightMenu />
      <MobileDrawer />
      <ProfileCard />

      <main className="mx-auto max-w-6xl px-4 md:ml-[22rem] py-10">
        <Home />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
