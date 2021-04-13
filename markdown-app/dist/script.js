import React, {
useState,
useEffect,
useReducer } from
"https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

marked.setOptions({
  breaks: true });


const defaultState = {
  expandEditor: false,
  expandPreviewer: false };


const reducer = (state, action) => {
  if (action.type === "EXP_EDITOR") {
    return {
      ...state,
      expandEditor: !state.expandEditor,
      expandPreviewer: false };

  }
  if (action.type === "EXP_PREVIEWER") {
    return {
      ...state,
      expandEditor: false,
      expandPreviewer: !state.expandPreviewer };

  }
};

function MarkdownApp() {
  const [editor, setEditor] = useState(placeholder);
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleChange = e => {
    setEditor(e.target.value);
  };

  const Title = () => {
    return /*#__PURE__*/(
      React.createElement("div", { className: "jumbotron text-dark bg-warning" }, /*#__PURE__*/
      React.createElement("h1", { className: "mb-1" }, "Markdown Previewer"), /*#__PURE__*/
      React.createElement("div", { id: "author" }, /*#__PURE__*/
      React.createElement("p", null, "by",
      " ", /*#__PURE__*/
      React.createElement("a", { href: "https://sngkr.netlify.app/", target: "_blank" }, "Sangkara")))));






  };

  const classes = state.expandEditor ?
  ["editor maximized", "previewer hide", "fa-compress-alt"] :
  state.expandPreviewer ?
  ["editor hide", "previewer maximized", "fa-compress-alt"] :
  ["editor", "previewer", "fa-expand-alt"];

  return /*#__PURE__*/(
    React.createElement("div", { className: "container-fluid" }, /*#__PURE__*/
    React.createElement(Title, null), /*#__PURE__*/
    React.createElement("div", { id: "content", className: "w-75 mx-auto mb-5" }, /*#__PURE__*/
    React.createElement("div", { className: "row no-gutters" }, /*#__PURE__*/
    React.createElement("div", { className: "col " + classes[0] }, /*#__PURE__*/
    React.createElement("div", { className: "mr-2 rounded shadowww border border-secondary" }, /*#__PURE__*/
    React.createElement("div", { className: "bg-warning rounded-top d-flex" }, /*#__PURE__*/
    React.createElement("i", { className: "fas fa-cannabis my-auto p-2" }), /*#__PURE__*/
    React.createElement("p", { className: "my-auto" }, "Editor"), /*#__PURE__*/
    React.createElement("i", {
      className: "my-auto ml-auto p-2 fas " + classes[2],
      onClick: () => dispatch({ type: "EXP_EDITOR" }) })), /*#__PURE__*/


    React.createElement("textarea", {
      name: "markdown",
      id: "editor",
      className: "content-area d-block",
      value: editor,
      onChange: handleChange }))), /*#__PURE__*/



    React.createElement("div", { className: "col " + classes[1] }, /*#__PURE__*/
    React.createElement("div", {
      className: "ml-2 rounded shadowww border border-secondary bg-light",
      id: "previewer" }, /*#__PURE__*/

    React.createElement("div", { className: "bg-warning rounded-top d-flex" }, /*#__PURE__*/
    React.createElement("i", { className: "fas fa-cannabis my-auto p-2" }), /*#__PURE__*/
    React.createElement("p", { className: "my-auto" }, "Previewer"), /*#__PURE__*/
    React.createElement("i", {
      className: "my-auto ml-auto p-2 fas " + classes[2],
      onClick: () => dispatch({ type: "EXP_PREVIEWER" }) })), /*#__PURE__*/


    React.createElement("div", { className: "content-area p-2" }, /*#__PURE__*/
    React.createElement("div", {
      dangerouslySetInnerHTML: { __html: marked(editor) },
      id: "preview" }))))))));








}

const placeholder = `# Simple React Markdown Previewer

## You can use GitHub flavored markdown into the editor and see the preview beside as you type

[Check it out the GitHub Flavored Markdown Spec](https://github.github.com/gfm/)

\`You can use inline code\`

\`\`\`
Or use
multi-line
code
\`\`\`

- Also you
- can build
- a list

> Use blockquotes

**And make your text bold**

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

ReactDOM.render( /*#__PURE__*/
React.createElement(React.StrictMode, null, /*#__PURE__*/
React.createElement(MarkdownApp, null)),

document.getElementById("app"));