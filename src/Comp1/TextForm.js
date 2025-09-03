import React, {useState} from 'react';


export default function TextForm(props) {

    const[text, setText] = useState('');

    // text="new text"; // wrong method to update any variable

    // setText("new text");     // correct way to change state

    const handleUpclick = ()=>{
        // console.log("uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase","success");
    }

    const handleOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value)
    }

    const handleLoclick = ()=>{
        // console.log("uppercase was clicked" + text);
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase","success");
    }

    return ( 
      <> 
    <div className="container" style={{color : props.mode==='dark'? 'white':'#042743'}}>
        <h1>{props.heading}</h1>   
<div className="mb-3">
 
  <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor : props.mode==='dark'? 'grey':'white' ,color : props.mode==='dark'? 'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>

<button className="btn btn-primary mx-2" onClick={handleUpclick}>convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoclick}>convert to lowercase</button>
</div>

<div className="container my-2" style={{color : props.mode==='dark'? 'white':'#042743'}}>
  <h2>your text summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008 *  text.split(" ").length} minutes to read  </p>

  <h1>preview</h1>
  <p>{text}</p>
</div>


</>
  )
}
