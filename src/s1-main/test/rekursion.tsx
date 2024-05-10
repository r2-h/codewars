type Data = {
  id: number
  name: string
  children?: Data[]
}
const data: Data[] = [
  {
    id: 1,
    name: "Node 1",
    children: [
      {
        id: 2,
        name: "Node 1.1",
        children: [
          {
            id: 3,
            name: "Node 1.1.1",
          },
          {
            id: 4,
            name: "Node 1.1.2",
          },
        ],
      },
      {
        id: 5,
        name: "Node 1.2",
        children: [
          {
            id: 6,
            name: "Node 1.2.1",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Node 2",
    children: [
      {
        id: 8,
        name: "Node 2.1",
      },
    ],
  },
  {
    id: 9,
    name: "Node 3",
  },
]

export const Recursion = () => {
  const render = (data: Data[]) => {
    return (
      <ul>
        {data.map((node) => (
          <li>
            {node.name}
            {node?.children ? render(node.children) : null}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div>
      <h1>App</h1>
      {render(data)}
    </div>
  )
}
