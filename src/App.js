import "./App.css";
import { useEffect, useState } from "react";
// import Counter from "./Counter";

function App() {
  ///*useState is to set the and initalise the state
  let [count, setCount] = useState(0);

  //*useEffect used to control the side effect from re-rendering
  // useEffect(() => {
  //   if (count === 1) {
  //     setCount(count + 1);
  //   }
  // }, []);

  const OnIncrement = () => {
    return setCount((prevCOunt) => prevCOunt + 1);
  };

  console.log(count);
  console.log("render");
  return (
    <div className="App">
      <p>{count}</p>
      <button count={count} onClick={OnIncrement}>
        Increase on click
      </button>
      <button onClick={() => setCount(0)}>Reset the number</button>
    </div>
  );
}

export default App;

/**
 *
 *In the given code, the useState hook is used to declare a state variable called count. The initial value of count is set to 0 using the following line of code:
The useState hook returns an array containing two values: the current state value (count in this case) and a function to update the state (setCount in this case).

Whenever setCount is called with a new value, React will automatically update the state and re-render the component to reflect the new value.

The count variable is also used as a prop for the onClick event handler for the "Increase on click" button:
When the button is clicked, the OnIncrement function is called, which updates the count state by calling the setCount function with a new value.

So essentially, the useState hook is used to declare and manage a state variable (count) that can be updated and used to display dynamic content in the component.
 */

/**
 * In the given code, the useEffect hook is not strictly necessary, as it is not being used for any critical functionality. The component works perfectly fine without it.

The purpose of useEffect is to control side effects and perform actions after the component has been mounted or updated. In this case, the side effect being controlled is the state update caused by the setCount function. Since the state update is happening inside the OnIncrement function, it is not necessary to use useEffect to control it.

However, if you do have a scenario where you need to perform some action after the component has mounted or updated, then you should use useEffect. For example, if you need to fetch data from an API or update the document title based on the state of the component, then you would use useEffect to control those side effects.

In summary, you don't need to use useEffect in the given code, but it can be useful in other scenarios where you need to control side effects.
 */
