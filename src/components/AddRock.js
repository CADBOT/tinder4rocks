import React, {Component} from 'react'

class AddRock extends Component {
  state = {newRock: ''}

  handleChange = (e) => {
    this.setState({newRock: e.target.value})
  }

  handleAddRock = () => {
    this.props.addRock(this.state.newRock)
    this.setState({newRock: ''})
  }

  render() {
    return (
      <div>
        <label> New rock name </label>
        <input onChange={this.handleChange} />
        <button onClick={this.handleAddRock} />
      </div>
    )
  }
}

export default AddRock
