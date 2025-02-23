"use client"
import Image from "next/image";
import { todo } from "node:test";
import { useState } from "react";

export default function Home() {
  const [userInput, setUserInput] = useState(""); // userInput Extracts data from the Input tag, setUserInput sets the value.  
  const [toDolist, setTodoList] = useState([""]); // toDolist graves the userInput data, SetTodoList sets that value once you hit the button displaying it.


  return (
    <div className="flex items-center justify-center flex-col">
          <h1 className=" text-3xl">Hello This is a Simple Todo list</h1>
          <form>
            <input className = "border-2 border-black p-2" type="text" value = {userInput} onChange={(e)=>{ e.preventDefault(); setUserInput(e.target.value);  }}/> 
            <button onClick={(e)=>{e.preventDefault(); setTodoList([userInput, ...toDolist]);}}>Submit</button>
          </form>
          <ul>
            {
               toDolist.length >= 1 ? toDolist.map((toDoItem, idx)=>{
                return <li key={idx}>{toDoItem}</li>;
              })
              : "enter a List item"
            }
             
          </ul>

    </div>
  );
}
