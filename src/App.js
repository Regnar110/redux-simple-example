import { connect } from 'react-redux'
import { setCurrentCount } from './redux/count/count.action'
import Result from './Result'
import './App.css'


const App = ({ setCurrentCount, prevState }) => {

  const handleIncrament = () => {
    setCurrentCount(prevState.count + 1)
  }

  const handleDecrament = () => {
    setCurrentCount(prevState.count - 1)
  }

  return (
    <div className='App'>
      <button onClick={handleIncrament}>Incrament</button>
      <button onClick={handleDecrament}>Decrament</button>
      <Result />
    </div>  
  )
}

const mapDispatchToProps = dispatch => ({
  setCurrentCount: count => dispatch(setCurrentCount(count))
})

const mapStateToProps = state => ({
  prevState: state.count
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
