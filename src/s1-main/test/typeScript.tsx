export const TypeScript = () => {
  // const promisedNumbers = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

  // asyncMap(promisedNumbers, (num, index) => num * index).then((result) => {
  //   console.log(result); // [0, 2, 6]
  // })
  //-----------------------------------------------------------------------------------------------------------------------------------
  // const data = [
  //   { id: 1, name: "siberia can code ❄️" },
  //   { id: 2, body: { name: "siberia can code ❄️" } },
  //   { id: 3, type: "person", name: "siberia", lastname: "can code ❄️" },
  // ]

  // const flatData = (data: any) => {}

  // const result = flatData(data)
  // console.log(result)
  //   [
  //     { id: 1, name: "siberia can code ❄️" },
  //     { id: 2, name: "siberia can code ❄️" },
  //     { id: 3, name: "siberia can code ❄️"},
  //   ]

  //-----------------------------------------------------------------------------------------------------------------------------------

  /**
   * 1) Необходимо обойти дерево и вернуть сумму значений (recursion, stack)
   * ! Типизировать tree и sumTree
   ***/
  // type Tree = {
  // }
  // const tree = [
  //   {
  //     v: 5,
  //     c: [
  //       {
  //         v: 5,
  //       },
  //       {
  //         v: 10,
  //         c: [
  //           {
  //             v: 11,
  //           },
  //         ],
  //       },
  //       {
  //         v: 11,
  //         c: [
  //           {
  //             v: 12,
  //             c: [
  //               {
  //                 v: 5,
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     v: 5,
  //     c: [
  //       {
  //         v: 7,
  //       },
  //       {
  //         v: 12,
  //         c: [
  //           {
  //             v: 11,
  //           },
  //         ],
  //       },
  //       {
  //         v: 14,
  //       },
  //     ],
  //   },
  // ]

  // function sumTree() {
  // }
  // console.log(sumTree(tree)) //108

  return <div>TypeScript</div>
}
