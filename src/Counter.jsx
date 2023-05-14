const Counter = (props) => {
  // const increment = onClick(count){return count++}

  return (
    <div>
      <button>{props.count}Increment</button>
    </div>
  );
};

export default Counter;
