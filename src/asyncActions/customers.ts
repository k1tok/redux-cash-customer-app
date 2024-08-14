import { Dispatch } from "redux";
import { addManyCustomersAction } from "../store/customerReducer";

export const fetchCustomers = () => {
	return (dispatch: Dispatch) => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((json) => dispatch(addManyCustomersAction(json)));
	};
};
