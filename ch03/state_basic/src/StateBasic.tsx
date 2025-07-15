import React from "react"

export type StateBasicProps = {
  init: number;
}

export function StateBasic({ init }: StateBasicProps): React.ReactElement {
  const [count, setCount] = React.useState(init);
  console.log(`count is ${count}`);
  const handleClick = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  return (
    <React.Fragment>
      <button type="button" onClick={handleClick}>
        <p>{count}번 클릭했습니다.</p>
      </button>
    </React.Fragment>
  )
}