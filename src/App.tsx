import AddTimer from "./components/AddTimer"
import Header from "./components/Header"
import Timers from "./components/Timers"
import Button from "./components/UI/Button"
import Container from "./components/UI/Container"
import Input from "./components/UI/Input"
import TimersContextProvider from "./store/timersContext"


function App() {

  return (
    <div>
      {/* <Input id="name" label="Your Name" type="text" />
      <Input id="age" label="Your Age" type="number" />

      <Button el="button"> A Button </Button>
      <Button el="anchor" href="https://google.com"> A Link </Button>

      <Container as="button" onClick={() => { }}> Click Me </Container> */}

      <TimersContextProvider>
        <Header />
        <main>
          <AddTimer />
          <Timers />
        </main>
      </TimersContextProvider>

    </div>

  )
}

export default App
