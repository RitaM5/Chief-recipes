import React from 'react';

import ReactToPdf from "react-to-pdf";
const ref = React.createRef();
const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [4, 2]
};
const Blog = () => {
    return (
        <div className='my-container'>
            <div className='text-right'>
                <ReactToPdf targetRef={ref} filename="blog.pdf">
                    {({ toPdf }) => (
                        <button className='bg-green-400 py-1 px-3 rounded-2xl text-white font-semibold' onClick={toPdf}>Download PdF</button>
                    )}
                </ReactToPdf>
            </div>
            <div ref={ref} style={{ width: "100%", height: "100%" }}>
                <h1 className='text-center my-6 text-3xl text-red-600 font-semibold'></h1>
                <div className="card card-side grid grid-cols-1 gap-5 bg-gray-400 shadow-xl py-10 px-5 my-12">
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Tell us the differences between uncontrolled and controlled components ?
                        </div>
                        <div className="collapse-content">
                            <p>controlled and uncontrolled components refer to different types of user interface elements, and the key difference between them lies in how they handle their state management.<br />
                                A controlled component is one whose state is entirely managed by the parent component. In other words, a controlled component is driven entirely by the data and actions passed down to it via its props. The parent component handles all the user interaction, maintains the state of the controlled component, and passes any changes down to the controlled component through its props & its easier to test.<br />
                                , on the other hand, An uncontrolled component manages its own state internally, without relying on the parent component to pass down any data or actions. An uncontrolled component can manage its own state using local state or refs, and it communicates changes back up to the parent component using events or callbacks. Uncontrolled components can be quicker to set up and less verbose than controlled components & it's herder to text</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            How to validate React props using PropTypes ?
                        </div>
                        <div className="collapse-content">
                            <p>PropTypes is not mandatory. It is just a way for code users to easily understand what types of props a component should receive.Using PropTypes helps improve code readability and maintainability.PropTypes is not included in the core React library, so need to install it separately using a package manager 'npm install --save prop-types'.need to import it in component file 'import PropTypes from 'prop-types'.After importing PropTypes, then can define the propTypes in component</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Tell us the difference between nodejs and express js
                        </div>
                        <div className="collapse-content">
                            <p>Node.js and Express.js are both popular technologies used in web development, but they serve different purposes.Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.Node.js is the platform on which Express.js is built. Node.js provides the runtime environment for executing JavaScript code on the server-side, while Express.js provides a set of abstractions and utilities that make it easier to build web applications on top of Node.js.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What is a custom hook, and why will you create a custom hook?
                        </div>
                        <div className="collapse-content">
                            <p>A custom hook is a JavaScript function that allows you to reuse stateful logic across multiple components in a React application.Custom hooks are a powerful tool that can help to improve the readability, maintainability, and performance of React applications.Custom hooks allow developers to create their own hooks that encapsulate complex or repetitive logic and expose it to other components, improving code reusability and reducing code duplication.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;