import React from 'react';
import ReactDOM from 'react-dom/client';

//JSX => HTML-Like sytax or XML-Like syntax
//JSX (transpiled before it reaches to JS) - PARCEL -> Babel
const Title = () => (
	<h1 className='heading1'>Namaste React is here using JSX! 🚀</h1>
);

//Component composition => putting an element into another element
const HeaderComponent = () => (
	<div id='container'>
		<Title />
		<h1 className='heading'>This is a functional component.</h1>
	</div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeaderComponent />);
