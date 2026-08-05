import React from 'react';
import './App.css'
// React.ReactNode accepts the most inputs
interface ReactNodeProps {
  children: React.ReactNode;
}
const RNode = (props: ReactNodeProps) => <div>{props.children}</div>

const ReactNodeApp = () => <>
<RNode><p>One element</p></RNode>
<RNode>
  <>
  <p>Fragments for</p>
  <p>More elements</p>
  </>
</RNode>
<RNode>1</RNode>
<RNode>Hello</RNode>
<RNode>{true}</RNode>
<RNode>{null}</RNode>


<RNode />
</>
// React.ReactElement accepts only JSX elements
interface ReactElementProps {
  children: React.ReactElement;
}

const RElement = (props: ReactElementProps) => <div>{props.children}</div>

const ReactElementApp = () => <>
<RElement><p>More elements</p></RElement>
<RElement>
  <>
  <p>More elements</p><p>More elements</p>
  </>
</RElement>

<RElement>1</RElement>
<RElement>Hello</RElement>
<RElement>{true}</RElement>
<RElement>{null}</RElement>
<RElement />
</>
/*
useCallback
export default function Form() {
  const [value, setValue] = useState("Change me!");

  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
setValue(event.currentTarget.value)
  }, [setValue])

  return (
    <>
      <input type="text" value={value} onChange={handleChange}/>
      <p>Value: {value}</p>
    </>
  )
}
  */
 /* 
 import { createContext, useContext, useState, useMemo } from 'react';
 useMemo and useContext
import './App.css'


type ComplexObject = {
  kind: string
}
const Context = createContext<ComplexObject | null>(null);

const useGetComplexObject = () => {
  const object = useContext(Context)
  if (!object) { throw new Error("useGetComplexObject must be used within a Provider") }
  return object
}

export default function App() {
  const object = useMemo(() => ({ kind: "complex"}), [])

  return (
    <Context value={object}>
       <MyComponent />
    </Context>
  )
}
  function MyComponent() {
    const object = useGetComplexObject();

    return (
<div>
  <p>Current object {object.kind}</p>
</div>
    )
  } 
    */
   /*
    import './App.css'
useContext
type Theme = | "dark" | "light" | "system";
const ThemeContext = createContext<Theme>("system")

const useGetTheme = () => useContext(ThemeContext);

export default function App() {
  const [theme, setTheme] = useState<Theme>('dark');

  return (
<ThemeContext value={theme} >
<MyComponent />
</ThemeContext>
  )
  function MyComponent() {
    const theme = useGetTheme()
  
  return (
    <div>
      <p>Current theme: {theme}</p>
    </div>
  )
}
}
*/
/*
import { useReducer } from 'react';
import './App.css'
useReducer
interface State {
  count: number
};

type CounterAction = 
| { type: 'reset'}
| { type: 'setCount'; value: State["count"] }

const initialState: State = { count: 0 };

function stateReducer(state: State, action: CounterAction): State {
  switch (action.type) {
    case 'reset':
      return initialState;
      case 'setCount':
      return { ...state, count: action.value };
      default:
        throw new Error("Mistake try again!")
  }
}
export default function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
  const reset = () => dispatch({ type: "reset" });
  return (
<div>
  <h1>Welcome to my Counter</h1>
  <p>Count {state.count}</p>
  <button onClick={addFive}>Add 5</button>
  <button onClick={reset}>Reset Button</button>
</div>
  )
}
*/
