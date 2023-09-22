import PasswordComponent from './components/passwordComponent';
import './App.css';

function App() {
  return (
    <div className='App'>
      {/* This is the rendering of the PasswordComponent, feel free to update the options in order to test the functionality */}
      <PasswordComponent options={['specialChar','number', 'uppercase', 'noConsecutiveLetters']}/>
    </div>
  );
}

export default App;
