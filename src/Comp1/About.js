
// import React, { useState } from 'react'

export default function About(props) {
  //  const [myStyle , setMyStyle] =  useState({
   
   
  //       color:'black',
  //       backgroundColor:'white'
        
  //   })

  let myStyle= {
    color: props.mode==='dark'? 'white':'#042743',
    backgroundColor:props.mode==='dark'? 'rgb(36 74 104)':'white'
    
  }

// const [btnText, setBtnText]=useState("enable dark mode")

//   const toggleStyle = () =>{
//     if(myStyle.color === 'black'){
//         setMyStyle({
//             color:'white',
//         backgroundColor:'black',
//         border: '1px solid white'
//         })
//         setBtnText("enable dark mode")
//     }
//     else{
//         setMyStyle({
//             color:'black',
//         backgroundColor:'white'
//         })
//         setBtnText("enable light mode")
//     }
// }

  return (
    <div classNameName="container" >
        <h1 className="my-3" style={{color:props.mode === 'dark'?'white':'#042743'}}>About us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button"   style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze your Text:
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
        A word counter is a tool that provides instant data on the length of a text by counting the number of words, characters, sentences, and paragraphs.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Free to use:
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
         It is accessible to everybody and very easy to use. It helps writers stay within specific limits for essays, articles, and social media, track content for SEO, and estimate reading times, making it essential for managing written content effectively.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"   style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Key Features:
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
        <ul>
          <li><b>word Count:</b> Counts the total number of words in a given text. </li>
          <li><b>Character Count:</b> Counts the total characters, including letters, numbers, symbols, and spaces. 
Sentence.</li>
          <li> <b> Paragraph Count:</b> Identifies the number of sentences and paragraphs in the text. </li>
          <li><b>Real-Time Updates: </b>Displays counts as you type or paste text, allowing for immediate feedback.</li>
          <li><b>Reading Time Estimation:</b> Can provide an estimated reading or speaking time for the content. 
       </li>
        </ul>
        </div>
    </div>
  </div>
</div>


{ /* <div className="container my-3">
<button  onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
</div> */}
      
    
    </div>
  )
}
