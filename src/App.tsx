import { Provider } from 'react-redux'
import store from './store'
import SideBar from './containers/SideBar'
import TasksList from './containers/TasksList'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <SideBar />
        <TasksList />
      </Container>
    </Provider>
  )
}

export default App
