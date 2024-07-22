import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

//This allows us to import useSelectore and useDispatcher into any component file that needs to use the hooks, and avoids potential circular import dependency issues.

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()