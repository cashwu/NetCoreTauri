import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import { fetch } from '@tauri-apps/api/http';
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));

  }
  
  async function data() {

      console.log("--- get data ---");

      const url = "http://localhost:5205/api/data";
      const data = { name: "John", age: 30 };
      //
      await fetch(url, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
      })
          .then((resp) => console.log(resp.data))
          .catch((error) => console.error(error));
      
      // await fetch(url, {
      //     method: "POST",
      //     headers: {
      //         "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(data),
      // })
      //     .then((response) => response.json())
      //     .then((data) => console.log(data))
      //     .catch((error) => console.error(error));
  }

  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>
        <h2>cash test</h2>

      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <div className="row">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            greet();
            data();
          }}
        >
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button type="submit">Greet</button>
        </form>
      </div>
      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
