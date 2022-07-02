import Nowtodo from "./Nowtodo"
import Donelist from "../Done/Donelist"

const Checktodo = () => {
  const check = true
  return (
    <>
      <p>{check ? <Donelist /> : <Nowtodo />}</p>
    </>
  )
}

export default Checktodo
