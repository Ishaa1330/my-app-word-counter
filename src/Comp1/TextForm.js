import React, {useState} from 'react';


export default function TextForm(props) {

  

  
  // text="new text"; // wrong method to update any variable
  
  // setText("new text");     // correct way to change state
  
  const[text, setText] = useState('');
  
  const handleUpClick = ()=>{
    // console.log("uppercase was clicked" + text);
    let newText= text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase","success");
  }
  
  const handleOnChange = (event)=>{
    // console.log("on change");
    setText(event.target.value)
  }
  
  const handleLoClick = ()=>{
    // console.log("uppercase was clicked" + text);
    let newText= text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowercase","success");
  }
  
  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("copied to clipboard","success");
  }
  
  const handleExtraSpace=()=>{
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));
    props.showAlert("extra space remove","success");
  }

  const handleClearClick=(event) => {
    let newText='';
    setText(newText);
    props.showAlert("text cleared ","success");
      

    }

    return ( 
      <> 
    <div className="container" style={{color : props.mode==='dark'? 'white':'#042743'}}>
        <h1 className='mb-2'>{props.heading}</h1>   
<div className="mb-3">
 
  <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor : props.mode==='dark'? '#13466e':'white' ,color : props.mode==='dark'? 'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>

<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>convert to uppercase</button>
<button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>convert to lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>copy text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>remove extra space</button>
<button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>clear text</button>
</div>

<div className="container my-2" style={{color : props.mode==='dark'? 'white':'#042743'}}>
  <h2>your text summary</h2>
  <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
  <p>{0.008 *  text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read  </p>

  <h1>Preview</h1>
  <p>{text.length>0?text:"Nothing to preview"}</p>
</div>


</>
  )
}
