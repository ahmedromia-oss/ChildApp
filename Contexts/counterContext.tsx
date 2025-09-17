import { useCounter } from "@/Hooks/useCounter";
import { createContext, ReactNode } from "react";
interface CounterProviderProps {
  children: ReactNode;
  value: number;
}
export const CoutnerContext = createContext<{
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
    <CoutnerContext.Provider value={{ counter, add, SetCounter }}>
      {children}
    </CoutnerContext.Provider>
  );
};
export default CounterProvider;
