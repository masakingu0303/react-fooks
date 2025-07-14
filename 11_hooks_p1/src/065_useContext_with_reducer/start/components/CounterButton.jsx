import { useContext } from "react";

const CounterButton = ({calcType, step}) => {

    const dispatch = useContext();

    const clickHandler = () => {
        dispatch({ type: calcType, step});
    }
    return <button onClick={clickHandler}>{calcType}{step}</button>
}
export default CounterButton;