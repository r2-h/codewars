import { useState } from "react"

const useStateWithHistory = (num) => {}

export function UseHistory() {
  // const [state, setState, goBack, goForward, history] = useStateWithHistory(1)

  // return (
  //   <div>
  //     <div>{state}</div>
  //     <div>{history.join(", ")}</div>
  //     <button onClick={() => setState(1)}>One</button>
  //     <button onClick={() => setState(2)}>Two</button>
  //     <button onClick={() => setState(3)}>Three</button>
  //     <button onClick={goBack}>goBack</button>
  //     <button onClick={goForward}>goForward</button>
  //   </div>
  // )
}
/* добавить хук useStateWithHistory, остальное не трогать

1
1

2
1, 2


3
1, 2, 3

2
1, 2, 3

3
1, 2, 3

*/
