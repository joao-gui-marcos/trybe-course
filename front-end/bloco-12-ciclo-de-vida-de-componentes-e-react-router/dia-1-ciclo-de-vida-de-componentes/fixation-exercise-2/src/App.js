import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: '',
      loading: true,
    }
    this.fetchUser = this.fetchUser.bind(this)
  }

  async fetchUser() {
    this.setState(
      { loading: true },


      async () => {
        const request = await fetch('https://api.randomuser.me/')
        const data = await request.json()
        this.setState({
          user: data.results[0].dob.age,
          loading: false,
        })

      }
    )

  }

  componentDidMount() {
    this.fetchUser()
  }


  shouldComponentUpdate(_nextProps, nextState) {
    console.log(nextState.user)
    if(nextState.user > 50) {
      return false
    }
    return true
  }

  render() {
    const {user, loading} = this.state
    const loadingElement = <span>Loading...</span>
    return(
      <div>
        {loading ? loadingElement : <div>{user}</div> }
        <button onClick={this.fetchUser}>Fetch User</button>
      </div>
    )
  }
}

export default App;
