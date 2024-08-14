const defaultState = {
	cash: 0,
};

const ADD_CASH: string = "ADD_CASH";
const GET_CASH: string = "GET_CASH";

export const cashReducer = (
	state = defaultState,
	action: { type: string; payload: number }
) => {
	switch (action.type) {
		case ADD_CASH:
			return { ...state, cash: state.cash + action.payload }; // к примеру, если action = {type:"", payolad:""}
		case GET_CASH:
			return { ...state, cash: state.cash - action.payload };
		default:
			return state;
	}
};
