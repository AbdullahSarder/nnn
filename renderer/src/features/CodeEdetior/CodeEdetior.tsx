import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import Editor, { DiffEditor } from '@monaco-editor/react';
import files from './files';
import { Switch } from '@mui/material';
const CodeEdetior = () => {
	const [fileName, setFileName] = useState('index.html');

	const file = files[fileName];
	const editorRef = useRef(null);

	function handleEditorDidMount(editor, monaco) {
		editorRef.current = editor;
	}

	function showValue() {
		// document.write(editorRef.current.getValue());
		document.getElementById('outputarea').innerHTML =
			editorRef.current.getValue();
		// alert(editorRef.current.getValue());
	}
	// onValidate
	function handleEditorValidation(markers) {
		// model markers
		// markers.forEach((marker) => console.log("onValidate:", marker.message));
		markers.forEach((marker) =>
			onchange('problemarea').innerHTML('onValidate:', marker.message)
		);
	}

	// Submit value
	function submitValue() {
		// document.write(editorRef.current.getValue());
		document.getElementById('outputarea').innerHTML =
			editorRef.current.getValue();
		// alert(editorRef.current.getValue());
	}
	// switch
	const label = { inputProps: { 'aria-label': 'Switch demo' } };
	return (
		<div className="Edetior">
			<div className="Edetior1">
				<div className="editor_top">
					<button
						disabled={fileName === 'index.html'}
						onClick={() => setFileName('index.html')}
					>
						index.html
					</button>
					{/* <button
				disabled={fileName === 'style.css'}
				onClick={() => setFileName('style.css')}
			>
				style.css
			</button>
			<button
				disabled={fileName === 'script.js'}
				onClick={() => setFileName('script.js')}
			>
				script.js
			</button> */}
					<div className="edetior-top-button">
						<div className="switch">
							<Switch {...label} />
							Watch
						</div>
						<div className="run">
							<button onClick={showValue}>Run</button>
						</div>
					</div>
				</div>

				<div className="edetior-code">
					<Editor
						height="400px"
						width="100vh"
						path={file.name}
						defaultLanguage={file.language}
						defaultValue={file.value}
						// onChange={handleEditorChange}
						theme="white"
						onMount={handleEditorDidMount}
						onValidate={handleEditorValidation}
						EditorAutoClosingStrategy={
							'always' | 'languageDefined' | 'beforeWhitespace' | 'never'
						}
					/>
				</div>
			</div>
			<div className="feedback">
				<p>Feedback</p>
				<p>
					Problem <span className="total_problem">0</span>
				</p>

				<hr></hr>
				<div id="problemarea"> </div>
				<div id="outputarea"> </div>
			</div>
		</div>
	);
};

export default CodeEdetior;
