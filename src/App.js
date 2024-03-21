import Container from "./Container";
import Container2 from "./Container2";
import Container3 from "./Container3";
import Container4 from "./Container4";

function App() {
  return (
    <div>
      <p>Hello World</p>
      <Container data="Kumar" id={23} />
      <Container2 data="Kumar" id={23} />
      <Container3 />
      <Container4 />
    </div>
  );
}
// npx create-react-app allsmallcasename
// index.html is starting point
// npm start
// starting point react point application
// components ... Modularity

// App parent
// Container child

// React is Unidirectional
// We can send data from parent to child
// Two ways to receive data from parent
// First one - receive as a object
// Second one - destructure and recveive

// props - property

// to write javascript inside html we use {} curly Braces
// js in html is called JSX

// onclick function ..how to trigger them
// inplace of class we write className

// i create a list. iterate on elements and return div

export default App;
