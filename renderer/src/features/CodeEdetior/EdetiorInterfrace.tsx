import CodeEdetior from './CodeEdetior';

const EdetiorInterfrace = () => {
	return (
		<div className="EditorInterfrace">
			<div className="instruction">
				<h2 className="instructionTitle">
					<span>
						<img className="icons" src="./Icon/inistruction.svg"></img>
					</span>
					Inistraction
				</h2>

				<p>Task1</p>
				<p>
					First, you'll start by building a simple web page using HTML. You can
					edit code in your code editor, which is embedded into this web page.
				</p>

				<p>
					Do you see the code in your code editor that says{' '}
					<code>&lt;h1&gt;Hello World &lt;h1&gt;</code>? That's an HTML element.
				</p>

				<p>Most HTML elements have an opening tag and a closing tag.</p>

				<p>Opening tags look like this:</p>
				<pre>&lt;h1&gt;</pre>

				<p>Closing tags look like this:</p>
				<pre>&lt;/h1&gt;</pre>

				<p>Topics Cover</p>
			</div>
			<CodeEdetior></CodeEdetior>
		</div>
	);
};

export default EdetiorInterfrace;
