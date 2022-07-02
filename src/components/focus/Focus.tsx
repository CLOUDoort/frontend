import Currenttime from "./Currenttime/CurrentTime"
import Donelist from "./Done/Donelist"
import Nowtodo from "./Now/Nowtodo"
import Quotes from "./Quotes/Quotes"
import Writetodo from "./Todo/Writetodo"
import Todolist from "./Todo/Todolist"

const Focus = () => {
  return (
    <>
      <h1>Focus now</h1>
      <Currenttime />
      <Todolist />
      <Nowtodo />
      <Quotes />
    </>
  )
}

export default Focus
