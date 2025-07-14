import Input from "./components/input";
import Select from "./components/select";
import Result from "./components/Result";
import { CalcProvider } from "./context/CalcContext";

const Example = () => {
  
  return (
    <>
    <CalcProvider>
      <Input name="a" />
      <Input name="b" />
      <Select />
      <Result />
    </CalcProvider>
    </>
  );
};

export default Example;
