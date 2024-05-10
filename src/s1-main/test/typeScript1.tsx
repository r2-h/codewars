import { FC } from "react"

type OtherProps = {
  name: string
  age: number
}

const OtherFC: FC<OtherProps> = ({ age, name }) => {
  return (
    <div>
      {name} {age}
    </div>
  )
}

/*  Поправить типы в блоке ниже
 При передаче компонента OtherFC в пропc Component компонента ContainerFc
 TS должен давать подсказку какие еще пропcы мы можем передать в ContainerFc
 помимо собственных пропcов ContainerFc с правильным указанием типа этих пропов */

/** Начало блока в котором можно редактировать и дополнять типы */
type IProps = {
  Component: any
  height: number
} 

const ContainerFc: any = (props) => {
  const { Component, height,  } = props

  return (
    <div style={{ height: `${height}px` }}>
      <Component {...props} />
    </div>
  )
}
/** Конец блока в котором можно редактировать типы и дополнять типы */

/** Тут не должно быть ошибок типов */
const AnyComponent1 = () => {
  return <ContainerFc height={5} Component={OtherFC} name="Макс" age={30} />
}

/** Тут должны быть ошибки типов */
const AnyComponent2 = () => {
  return <ContainerFc height={5} Component={OtherFC} name={30} age="Макс" />
}

const AnyComponent3 = () => {
  return <ContainerFc height={5} Component={OtherFC} role="Макс" />
}

const AnyComponent4 = () => {
  return <ContainerFc height={5} Component={OtherFC} name="Макс" />
}

// ответ
// type IProps<T> = {
//     Component: FC<T>
//     height: number
//   } & T
//const ContainerFc: FC<IProps<OtherProps>> = (props) => {
