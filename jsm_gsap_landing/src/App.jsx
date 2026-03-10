import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap/gsap-core.js";
import Navbar from "./components/Navbar";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
    </main>
  );
}

export default App;