import React, { useState } from 'react';

function Textform(props) {
	const handleUpClick = () => {
		let newText = text.toUpperCase();
		setText(newText);
		props.showAlert("Converted to Uppercase","success")
  };
  const handleLoClick = () => {
		let newText = text.toLowerCase();
		setText(newText);
		props.showAlert("Converted to lowercase","success")
	};

	const handleClearClick = () => {
		let newText = ""
		setText(newText)
		props.showAlert("Text cleared","success")
	}

	const handleCopy= () => {
		navigator.clipboard.writeText(textt)
		props.showAlert("copied to clipboard","success")
	}

	const handleExtraSpaces= ()=> {
		let newText = text.split(/[ ]+/)
		setText(newText.join(" "))
		props.showAlert("Remove extra spaces","success")
	}


	 

	const handleOnChange = (event) => {
		setText(event.target.value);
	};
	const [ text, setText ] = useState('');
	return (
    <>
	<div className="container" style = {{color:props.mode==="dark"?'white':'#042743'}}>

			<h1  className = "mb-2">{props.heading}</h1>
			<div className="mb-3">
				<textarea className="form-control" value={text} onChange={handleOnChange} style ={{backgroundColor:props.mode==="dark"?'#13364e':"white",color:props.mode==="dark"?'white':'#042743'} }      id="myBox" rows="8" />
			</div>

			<button disabled = {text.length ===0}className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
				Convert to Uppercase
			</button>
     		 <button disabled = {text.length ===0} className="btn btn-primary mx-2  my-1" onClick={handleLoClick}>
				Convert to Lowercase
			</button>
			<button  disabled = {text.length ===0}className="btn btn-primary mx-2  my-1" onClick={handleCopy}>
				Copy Text
			</button>
			<button  disabled = {text.length ===0}className="btn btn-primary mx-2  my-1" onClick={handleClearClick}>
				Clear Text
			</button>
			<button  disabled = {text.length ===0}className="btn btn-primary mx-2  my-1" onClick={handleExtraSpaces}>
				Remove Extra Spaces
			</button>
		</div>
    <div className="container my-3" style = {{color:props.mode==="dark"?'white':'#042743'}}>
    <h2> Your Summary here</h2>
  <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length}characters</p>
  <p> { 0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
  <h2> Preview</h2>
  <p>{text.length>0?text:"Nothing to Preview!"}</p>
    </div>
    </>
	);
}

export default Textform;