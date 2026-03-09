

const App = () => {
  // return (
  //   // <div id="parent">
  //   //   <h1 id="child1">App</h1>
  //   //   <h4 id="child2">hello shery</h4>
  //   // </div>
  //   //function se ek hi cheeze return kar sakte hai to humne div ke andar h1 aur h4 ko wrap kar diya hai taki ek hi element return ho jaye agr hame do cheeze krni hai toh hame fragment ka use karna padega
  // )
  return (
    <>
      <h1 id="child1">App</h1>
      <h4 id="child2">hello shery</h4>
    </>//toh yaha pr khalli tag laga dete hai jise fragment kehte hai aur iske andar h1 aur h4 ko wrap kar diya hai taki ek hi element return ho jaye
  )
}

export default App

//npm create vite is used to create a new react project and it will ask for the name of the project and then it will create a new folder with that name and then it will ask for the template and then it will create a new react project with that template.

//npm run dev is used to start the development server and it will open the browser with the url http://localhost:5173/ and we can see our react app running there.