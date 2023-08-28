import "./App.css";
import Card from "./components/Card";
import pic from "./images/profile.jpeg"

function App() {
  return (
    <div>
      <Card
        pic={pic}
        name="Prakash A"
        role="Software Developer"
        desc="Full Stack Developer with a passion for developing scalable web applications.
              Focused on efficient learning and eager to tackle more complex problems."
        tech="React js, tailwind css, sass, Next js,
        Spring boot, Flask"
      />
    </div>
  );
}

export default App;
