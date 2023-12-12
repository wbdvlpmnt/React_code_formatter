import { useState } from "react";
import "./App.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function App() {
  const [codeToRender, SetCodeToRender] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <Header />
      <br />
      <div className="app">
        <div>
          {isExpanded ? (
            <div style={{ display: "flex" }}>
              <textarea
                placeholder="Enter code here..."
                value={codeToRender}
                onChange={(e) => SetCodeToRender(e.target.value)}
              />
              <button
                className="expansionButton"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <div style={{ display: "flex" }}>
                  Hide
                  <ArrowLeft />
                </div>
              </button>
            </div>
          ) : (
            <button
              className="expansionButton"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <div style={{ display: "flex" }}>
                Show
                <ArrowRight />
              </div>
            </button>
          )}
        </div>
        <CodeBlock>{codeToRender}</CodeBlock>
      </div>
    </>
  );
}

export default App;

const Header = () => {
  return (
    <div className="header">
      <h1>Code Formatter</h1>
    </div>
  );
};

const ArrowRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      style={{ height: "22px" }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
      />
    </svg>
  );
};

const ArrowLeft = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      style={{ height: "22px" }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
      />
    </svg>
  );
};

const CodeBlock = ({ language = "javascript", children }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={materialDark}
      showLineNumbers={true}
    >
      {children}
    </SyntaxHighlighter>
  );
};
