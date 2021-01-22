import { connect } from 'react-redux'

const Result = ( {count} ) => {
    console.log(count.count)
    return (
        <p>current result is {count.count}</p>
    )
}

const mapStateToProps = state => ({
    count: state.count
})

export default connect(mapStateToProps)(Result);