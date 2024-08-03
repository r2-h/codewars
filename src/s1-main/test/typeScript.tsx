export const TypeScript = () => {
  const data = [
    { id: 1, name: "siberia can code ❄️" },
    { id: 2, body: { name: "siberia can code ❄️" } },
    { id: 3, type: "person", name: "siberia", lastname: "can code ❄️" },
  ]

  const flatData = (data: any) => {}

  const result = flatData(data)
  console.log(result)
  //   [
  //     { id: 1, name: "siberia can code ❄️" },
  //     { id: 2, name: "siberia can code ❄️" },
  //     { id: 3, name: "siberia can code ❄️"},
  //   ]

  return <div>TypeScript</div>
}
