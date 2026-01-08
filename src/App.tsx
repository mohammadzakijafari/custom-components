import Button from "./components/Button"
import Container from "./components/Container"
import Input from "./components/Input"


function App() {

  return (
    <div>
      <Input id="name" label="Your Name" type="text" />
      <Input id="age" label="Your Age" type="number" />

      <Button el="button"> A Button </Button>
      <Button el="anchor" href="https://google.com"> A Link </Button>

      <Container as="button" onClick={() => { }}> Click Me </Container>
    </div>

  )
}

export default App
