import React from 'react';
import ReactDOM from 'react-dom';

function App(){
  const [state, setState] = React.useState("123123123");
   const [name, setName] = React.useState("asd");
  const [age, setAge] = React.useState(10);
 
  React.useEffect(()=>{console.log("Called once")},[]);
  
  React.useEffect(()=>{console.log("Called always")});

  React.useEffect(()=>{console.log("Called for name")},[name]);

  React.useEffect(()=>{console.log("Called for age")},[age]);
  
  React.useEffect(() => { return () => {console.log("called before mount and every useEffect and unmount")}});
  
  return  <div>    
            {[state, name, age].map(x => <div key={x}>{x}</div>)}
            <button onClick={() => setState(state + 1)}>Change State </button>
            <button onClick={() => setName(name + 1)}>Change Name </button>
            <button onClick={() => setAge(age + 1)}>Change Age </button>
          </div>
}

ReactDOM.render(<App/>, document.getElementById("root"));
