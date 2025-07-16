import { useDispatch } from "react-redux";
import { add, minus } from "../store/modules/counter";
const CounterButton = ({calcType, payload: step}) => {
    
    const dispatch = useDispatch();
    // const dispatch = useCounterDispatch();
    
    const clickHandler = () => {
        const action = calcType === '+' ? add(stap) : minus(stap);
        console.log(action);
        
        dispatch(action);
    }

    return <button onClick={clickHandler}>{calcType}{step}</button>
}
export default CounterButton;