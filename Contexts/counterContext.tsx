import { useCounter } from "@/Hooks/useCounter";
import { createContext, ReactNode } from "react";
interface CounterProviderProps {
  children: ReactNode;
  value: number;
}
export const CoutnerContext = createContext<{ counter: number; add: any }>({
  counter: 0,
  add: null,
});
const CounterProvider: React.FC<CounterProviderProps> = ({
  children,
  value,
}) => {
  const { counter, add } = useCounter(value);
  return (
    <CoutnerContext.Provider value={{ counter, add }}>
      {children}
    </CoutnerContext.Provider>
  );
};
export default CounterProvider;
