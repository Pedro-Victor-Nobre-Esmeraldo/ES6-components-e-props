import UserCard from "./components/UserCard";
import './App.css';

import Mario from './assets/mario-hisashi.png';
import Kelvin from './assets/kelvin-costa.png';
import Charles from './assets/charles-santos.png';
import Ana from './assets/anna-bia.png';

const users = [
  {
    id: 1,
    name: 'Kelvin Costa',
    userNAme: '@costa',
    followers: '653',
    following: '342',
    avatar: Kelvin
  },
  {
    id: 2,
    name: 'Charles Santos',
    userNAme: '@charles.santos',
    followers: '342',
    following: '894',
    avatar: Charles
  },
  {
    id: 3,
    name: 'Ana Bia',
    userNAme: '@anab',
    followers: '204',
    following: '128',
    avatar: Ana
  },
  {
    id: 4,
    name: 'Mario Hisashi',
    userNAme: '@hisashi',
    followers: '28',
    following: '17',
    avatar: Mario
  }
];



function App() {
  return (
    <div className="container">
      {users.map((user) => (
        <UserCard
          key={user.id}
          avatar={user.avatar}
          userNAme={user.userNAme}
          name={user.name}
          followers={user.followers}
          following={user.following}
        />
      ))}

    </div>
  );
}

export default App;
