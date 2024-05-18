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

const ContainerFc: any = (props: any) => {
  const { Component, height } = props

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

/* ------------------------------------------------------------------------------------------------------- */

const obj = {
  name: "Nik",
  age: 25,
}

type MYType = any // Вместо any нужный тип

/** Тут не должно быть ошибок типов */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const var1: MYType = "name"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const var2: MYType = "age"

/** Тут должны быть ошибки типов */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const var3: MYType = "test"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const var4: MYType = 25
/* ------------------------------------------------------------------------------------------------------ */
