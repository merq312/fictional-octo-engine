import styled from 'styled-components'
import Filter from './components/filter/filter.component'

const StyledApp = styled.div`
  background-color: #282c34;
  color: white;

  min-height: 100vh;
  padding: 0 10vw;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`

const App = () => {
  return (
    <StyledApp>
      <Filter />
    </StyledApp>
  )
}

export default App
