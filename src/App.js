import './App.css';
import { useState } from 'react';
import useGeneratePassword from './customHooks/useGeneratePassword';
import Button from './Components/Button';
import PasswordStrength from './Components/PasswordStrength';
import CheckBox from './Components/CheckBox';

function App() {
  console.log(process.env)
  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([{
    title: "Include Uppercase Letters", checked: false
  }, {
    title: "Include Lowercase Letters", checked: false
  }, {
    title: "Include Numbers", checked: false
  }, {
    title: "Include Symbols", checked: false
  }]);
  const [isCopied, setIsCopied] = useState(false);
  const { password, error, generatePassword } = useGeneratePassword();

  const onCheckBoxChanged = (index) => {
    const updatedCheckBoxState = [...checkboxData];
    updatedCheckBoxState[index]['checked'] = !updatedCheckBoxState[index]['checked']
    setCheckboxData(updatedCheckBoxState)
  }

  const onCopyHandler = () => {
    navigator.clipboard.writeText(password);
    setIsCopied(true);
    setInterval(() => {
      setIsCopied(false)
    }, 1000)
  }
  console.log(process.env)
  checkboxData.map(()=>{})
  return (
    <div className="App">


      {/* Password and Copy */}
      <div className='displayPsassword'>
        <span >{password}</span>
        <Button text={isCopied ? "Copied" : "Copy"} onClick={onCopyHandler} className="copyBtn" />
      </div>


      {/* Char Length and indicator */}
      <div className='charLength'>
        <span >
          <label>Char Length({process.env.REACT_APP_MY_VAR})</label>
          <label>{length}</label>
        </span>


        <input style={{ width: "100%" }} type='range' min="4" max="20" onChange={(e) => { setLength(e.target.value) }} value={length} />
      </div>


      {/* Checkboxes */}
      <div className='checkboxes'>
        {checkboxData.map((checkbox, index) => {
          return (
            <div key={index}>
              <CheckBox title={checkbox.title} isChecked={checkbox.checked} onChange={() => { onCheckBoxChanged(index) }} />
            </div>
          )
        })}
      </div>

      {/* Password Strength */}

      <PasswordStrength password={password} />

      {/* Error */}
      {error && <div className='errorMessage'>{error}</div>}


      {/* GenerateButton */}
      <Button text="Generate Password" onClick={() => generatePassword(length, checkboxData)} className="generateBtn" />
    </div>
  );

}

export default App;