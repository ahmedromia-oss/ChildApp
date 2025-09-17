import { createContext, ReactNode } from "react";
import { useCounter } from "../Hooks/useCounter";
interface CounterProviderProps {
  children: ReactNode;
  value: number;
}
export const CounterContext = createContext<{
  counter: number;
  add: any;
  SetCounter: any;
}>({
  counter: 0,
  add: null,
  SetCounter: null,
});
const CounterProvider: React.FC<CounterProviderProps> = ({
  children,
  value,
}) => {
  const { counter, add, SetCounter } = useCounter(value);
  return (
    <CounterContext.Provider value={{ counter, add, SetCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
export default CounterProvider;
