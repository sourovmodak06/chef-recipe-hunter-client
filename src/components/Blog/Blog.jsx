import React from "react";
import ReactToPdf from "react-to-pdf";
import { FaFileDownload } from "react-icons/fa";

const Blog = () => {
  const ref = React.createRef();
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [8.5, 12],
  };
  return (
    <div>
      <ReactToPdf
        targetRef={ref}
        filename="div-blue.pdf"
        options={options}
        x={0.5}
        y={0.5}
        scale={0.8}
      >
        {({ toPdf }) => (
          <button onClick={toPdf} className="bg-[#c5a86b] hover:bg-[#dbb665] relative flex justify-between items-center gap-2 py-3 px-5 text-xl font-bold m-auto hover:drop-shadow-xl border-2">
            <FaFileDownload  />{" "}
            <span>Download PDF</span>
          </button>
        )}
      </ReactToPdf>
      <div
        className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 py-7"
        ref={ref}
      >
        <div className="hover:text-[#c5a86b] py-5 px-3 rounded-lg border-2 hover:bg-[#1A1919] delay-75 transition-all">
          <h2 className="text-2xl font-semibold">
            Tell us the differences between uncontrolled and controlled
            components.
          </h2>
          <p className="font-medium text-justify py-5">
            The key difference between uncontrolled and controlled components is
            that uncontrolled components rely on the browser to manage their
            state, while controlled components rely on the React component to
            manage their state.
          </p>
        </div>
        <div className="hover:text-[#c5a86b] py-5 px-3 rounded-lg border-2 hover:bg-[#1A1919] delay-75 transition-all">
          <h2 className="text-2xl font-semibold">
            How to validate React props using PropTypes
          </h2>
          <p className="font-medium text-justify py-5">
            PropTypes is a library included in React that allows developers to
            define the expected types and shapes of the props passed to a
            component, as well as whether they are required or optional. This
            can be done by importing the PropTypes library, defining the
            propTypes for your component, and using the validated props in your
            component. By defining PropTypes for your components, you can catch
            potential issues with props passed to the component during
            development.
          </p>
        </div>
        <div className="hover:text-[#c5a86b] py-5 px-3 rounded-lg border-2 hover:bg-[#1A1919] delay-75 transition-all">
          <h2 className="text-2xl font-semibold">
            Tell us the difference between nodejs and express js.
          </h2>
          <p className="font-medium text-justify py-5">
            Node.js is a server-side runtime environment that allows developers
            to run JavaScript code outside of a web browser, while Express.js is
            a web application framework built on top of Node.js that simplifies
            the process of building web applications by providing a set of
            common features and functionalities. The main difference between
            Node.js and Express.js is that Node.js is a runtime environment,
            while Express.js is a web framework that runs on top of Node.js.
            While Node.js provides a platform for building server-side
            applications, Express.js provides a set of tools and features to
            simplify building web applications.
          </p>
        </div>
        <div className="hover:text-[#c5a86b] py-5 px-3 rounded-lg border-2 hover:bg-[#1A1919] delay-75 transition-all">
          <h2 className="text-2xl font-semibold">
            What is a custom hook, and why will you create a custom hook?
          </h2>
          <p className="font-medium text-justify py-5">
            A custom hook is a reusable function in React that encapsulates
            stateful logic and can be shared across multiple components. Custom
            hooks are created to abstract and simplify complex logic, reducing
            code duplication and making components more modular and easier to
            maintain. They can also help to separate concerns and improve code
            organization. Overall, custom hooks are a powerful tool for creating
            more efficient, readable, and reusable React components.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
