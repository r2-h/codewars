import React, { useEffect, useRef, MouseEvent, useState, ChangeEvent, MutableRefObject } from "react"
import s from "./App.module.css"
import HW1 from "../s2-homeworks/hw01/HW1"
import HW2 from "../s2-homeworks/hw02/HW2"
import HW3 from "../s2-homeworks/hw03/HW3"
import HW4 from "../s2-homeworks/hw04/HW4"
import HW5 from "../s2-homeworks/hw05/HW5"
import HW6 from "../s2-homeworks/hw06/HW6"
import { FC } from "react"
import { Recursion } from "./test/rekursion"
import { Render1 } from "./test/render1"

// function App() {
//   return (
//     <div className={s.App}>
//       <HW5 />
//     </div>
//   )
// }

function App() {
  return <Render1 />
}

export default App
