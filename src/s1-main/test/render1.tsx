import { useEffect, useState, FC, PropsWithChildren } from "react"

// Будет ли ререндериться компонент OtherFc?
const OtherFc = () => {
  console.log("render")

  return <div>2</div>
}

const MainFc: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState(0)
  console.log("state", state)

  useEffect(() => {
    setInterval(() => {
      setState((prev) => prev + 1)
    }, 1000)
  }, [])

  return <div>{children}</div>
}

export const Render1 = () => (
  <MainFc>
    <OtherFc />
  </MainFc>
)
