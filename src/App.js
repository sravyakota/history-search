import {Component} from 'react'

import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

const HistoryItem = props => {
  const {
    timeAccessed,
    logoUrl,
    title,
    domainUrl,
    onDeleteOption,
    details,
  } = props
  const {id} = details

  const onDelete = () => {
    onDeleteOption(id)
  }

  return (
    <>
      <li className="list">
        <p className="para1">{timeAccessed}</p>
        <div className="subList">
          <div className="ss">
            <img src={logoUrl} alt="domain logo" className="logo" />

            <p className="para">{title}</p>
            <p className="para2">{domainUrl}</p>
          </div>

          <button type="button" className="button" onClick={onDelete}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              testid="delete"
              className="delIcon"
            />
          </button>
        </div>
      </li>
    </>
  )
}

class History extends Component {
  state = {searchInput: '', historyList: initialHistoryList}

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteOption = id => {
    const {historyList} = this.state

    const result = historyList.filter(each => each.id !== id)

    this.setState({historyList: result})
  }

  render() {
    const {searchInput, historyList} = this.state

    console.log(searchInput)

    const searchResult = historyList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    let r = false

    if (searchResult.length === 0) {
      r = true
    } else {
      r = false
    }

    const msg = r ? 'There is no history to show' : ''

    return (
      <>
        <nav className="navv">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="img1"
          />
          <div className="search">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="img2"
            />
            <input type="search" className="input" onChange={this.onSearch} />
          </div>
        </nav>
        <ul className="historyContainer">
          {searchResult.map(eachHistory => (
            <HistoryItem
              timeAccessed={eachHistory.timeAccessed}
              logoUrl={eachHistory.logoUrl}
              title={eachHistory.title}
              domainUrl={eachHistory.domainUrl}
              key={eachHistory.id}
              details={eachHistory}
              onDeleteOption={this.onDeleteOption}
            />
          ))}
          <p className="msg">{msg}</p>
        </ul>
      </>
    )
  }
}

const App = () => <History />

export default App
