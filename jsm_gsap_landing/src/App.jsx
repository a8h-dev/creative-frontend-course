import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap/gsap-core.js";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div>
      <h1 className="text-3xl">Hello World!</h1>
    </div>
  );
}

export default App;