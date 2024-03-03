import React, {useEffect, useRef, MouseEvent, useState, ChangeEvent, MutableRefObject} from 'react'
import s from './App.module.css'
import HW1 from '../s2-homeworks/hw01/HW1'
import HW2 from '../s2-homeworks/hw02/HW2'
import HW3 from '../s2-homeworks/hw03/HW3';
import HW4 from '../s2-homeworks/hw04/HW4';
import HW5 from '../s2-homeworks/hw05/HW5'
import HW6 from '../s2-homeworks/hw06/HW6';

// type Data = {
//   id: number;
//   name: string;
//   children?: Data[];
// };
//
// const data: Data[] = [
//   {
//     id: 1,
//     name: 'Node 1',
//     children: [
//       {
//         id: 2,
//         name: 'Node 1.1',
//         children: [
//           {
//             id: 3,
//             name: 'Node 1.1.1'
//           },
//           {
//             id: 4,
//             name: 'Node 1.1.2'
//           },
//         ]
//       },
//       {
//         id: 5,
//         name: 'Node 1.2',
//         children: [
//           {
//             id: 6,
//             name: 'Node 1.2.1'
//           },
//         ]
//       },
//     ]
//   },
//   {
//     id: 7,
//     name: 'Node 2',
//     children: [
//       {
//         id: 8,
//         name: 'Node 2.1'
//       }
//     ]
//   },
//   {
//     id: 9,
//     name: 'Node 3',
//   },
// ]
// const render = (data: Data[]) => {
//   return (
//     <ul>
//       {
//         data.map(node => (
//           <li>
//             {node.name}
//             {node?.children ? render(node.children) : null}
//           </li>
//         ))
//       }
//     </ul>
//   )
// }
// function App() {
//   return (
//     <div>
//       <h1>App</h1>
//       {render(data)}
//     </div>
//   )
// }



function App() {



  return (
    <>

      <div className={s.App}>
        {/*<HW5/>*/}
      </div>
    </>
  )
}

export default App







