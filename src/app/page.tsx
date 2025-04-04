"use client"

import { use, useState } from "react";
import { useEffect } from 'react';

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [todolist, setToDoList] = useState([""]);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    const gettodolistdata = localStorage.getItem("todolist");
    if (gettodolistdata) {
      setToDoList(JSON.parse(gettodolistdata));
    }
  }, []);

  const DeleteListItem = (deleteItem: string) => {
    const UpdateArr = todolist.filter(item => item !== deleteItem);
    setToDoList(UpdateArr);
    localStorage.setItem('todolist', JSON.stringify(UpdateArr));
  }

  // console.log(userInput);
  return (
    <div className="w-lvh h-lvh text-white bg-slate-800 flex items-center justify-center flex-col ">
        <h1 className="text-5xl font-bold m-14">Welcome to the Todo App</h1>    
      <form className="flex items-center justify-center gap-2">
        <input placeholder="Add a todo item" value={inputVal} onChange={(ev) => {
          ev.preventDefault();
          setUserInput(ev.target.value);
          setInputVal(ev.target.value);
        }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" />
        <button onClick={(e) => {
          e.preventDefault();
          // const storeUserData = localStorage.setItem("userInput", userInput);
          const storeListData = localStorage.setItem("todolist", JSON.stringify([userInput, ...todolist]));
          setToDoList([userInput, ...todolist]);
          setInputVal("");
        }} className="py-2.5 px-5  text-white bg-white rounded-full  border-gray-200 hover:bg-teal-500 hover:text-blue-700  focus:ring-gray-100 dark:focus:ring-teal-700 dark:bg-teal-900 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Add</button>
      </form>

      <ul className="flex items-center justify-between flex-col">
        {
          todolist.length >= 1 ? todolist.map((listItem, idx) => {
            return <li className=" text-2xl bg-teal-900 list-decimal  border-2 border-teal-700 rounded-xl p-2 m-4" key={idx}>{listItem} 
            <button
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm p-4 m-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={(eve) => {
                eve.preventDefault();
                DeleteListItem(listItem);
              }}>Delete</button></li>;
          }) : userInput === "" ? <li>Start Your Todo list</li> : null
        }
        
      </ul>
    </div>
  );
}
