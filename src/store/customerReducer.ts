const defaultState = {
	customers: [],
};

const ADD_CUSTOMER: string = "ADD_CUSTOMER";
const REMOVE_CUSTOMER: string = "REMOVE_CUSTOMER";
const ADD_MANY_CUSTOMERS: string = "ADD_MANY_CUSTOMERS";

export const customerReducer = (
	state = defaultState,
	action: { type: string; payload: string | number | [] }
) => {
	switch (action.type) {
		case ADD_MANY_CUSTOMERS:
			return { ...state, customers: [...state.customers, ...action.payload] };
		case ADD_CUSTOMER:
			return { ...state, customers: [...state.customers, action.payload] }; // к примеру, если action = {type:"", payolad:""}
		case REMOVE_CUSTOMER:
			return {
				...state,
				customers: state.customers.filter(
					(customer: { id: number }) => customer.id !== action.payload
				),
			};
		default:
			return state;
	}
};

export const addCustomerAction = (payload: { name: string; id: number }) => ({
	type: ADD_CUSTOMER,
	payload,
});
export const addManyCustomersAction = (payload: { name: string }) => ({
	type: ADD_MANY_CUSTOMERS,
	payload,
});
export const removeCustomerAction = (payload: number) => ({
	type: REMOVE_CUSTOMER,
	payload,
});
