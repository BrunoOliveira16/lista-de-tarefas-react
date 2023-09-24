import ButtonAdd from '../../components/ButtonAdd'
import SideBar from '../../containers/SideBar'
import TasksList from '../../containers/TasksList'

const Home = () => (
  <>
    <SideBar showFilters={true} />
    <TasksList />
    <ButtonAdd />
  </>
)

export default Home
