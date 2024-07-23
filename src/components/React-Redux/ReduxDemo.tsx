import { Button } from "primereact/button";
import { decrement, increment } from "../../features/counter/counterSlice";
import { Card } from "primereact/card";
import { useAppDispatch, useAppSelector } from "../../hooks";

export function Counter() {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <Card title="Redux Demo" className="mt-1">
            <div className="flex">
                <span className="m-2 flex align-items-center justify-content-center">Click the buttons to Increment or Decrement the Counter State</span>
                <Button className="m-2" icon="pi pi-plus" label="Increment" onClick={() => dispatch(increment())} size="small"></Button>
                <span className="m-2 flex align-items-center justify-content-center">{count}</span>
                <Button className="m-2" icon="pi pi-minus" label="Decrement" onClick={() => dispatch(decrement())} size="small"></Button>
            </div>
        </Card>
    )
}