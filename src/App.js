// Create a functional component called MyProject that returns the following UI:

// An h1 with the name of your project
// A paragraph to give a brief description of your project
// An ordered or unordered list to discuss 3 major skills used in this project

export default function MyProject() {
  return (
    <div className="App">
      <h1>Hello world project</h1>
      <p>This is a plain simple project in react</p>
      <ul>
        <li>React</li>
        <li>Codesandbox</li>
        <li>CodingNinja</li>
      </ul>
    </div>
  );
}
