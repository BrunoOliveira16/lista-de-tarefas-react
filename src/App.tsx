import SideBar from './containers/SideBar'
import TasksList from './containers/TasksList'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar />
        <TasksList />
      </Container>
    </>
  )
}

export default App
