import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchCustomers } from "./asyncActions/customers";
import {
	addCustomerAction,
	removeCustomerAction,
} from "./store/customerReducer";

function App() {
	const dispatch = useDispatch();
	const cash = useSelector(
		(state: { cash: { cash: number } }) => state.cash.cash
	);
	const customers = useSelector(
		(state: { customers: { customers: [] } }) => state.customers.customers
	);

	const addCash = (cash: number) => {
		dispatch({ type: "ADD_CASH", payload: cash });
	};

	const getCash = (cash: number) => {
		dispatch({ type: "GET_CASH", payload: cash });
	};

	const addCustomer = (name: string) => {
		const customer = {
			name,
			id: Date.now(),
		};
		dispatch(addCustomerAction(customer));
	};

	const removeCustomer = (customer: { id: number }) => {
		dispatch(removeCustomerAction(customer.id));
	};

	return (
		<div className="app">
			<div style={{ fontSize: "2rem" }}>{cash}</div>
			<div style={{ display: "flex", gap: 10 }}>
				<button onClick={() => addCash(Number(prompt()))}>
					Пополнить счёт
				</button>
				<button onClick={() => getCash(Number(prompt()))}>
					Снять со счёта
				</button>
				<button onClick={() => addCustomer(String(prompt()))}>
					Добавить клиента
				</button>
				<button
					onClick={() => {
						return dispatch(fetchCustomers());
					}}
				>
					Получить клиентов из базы
				</button>
			</div>
			{customers.length > 0 ? (
				<div>
					{customers.map((customer: { name: string; id: number }) => (
						<div
							key={customer.id}
							onClick={() => removeCustomer(customer)}
							style={{
								fontSize: "2rem",
								padding: 10,
								marginTop: 10,
								border: "1px solid white",
								cursor: "pointer",
							}}
							title="Удалить пользователя"
						>
							{customer.name}
						</div>
					))}
				</div>
			) : (
				<div style={{ fontSize: "2rem", marginTop: 15 }}>
					Клиенты отсутсвуют
				</div>
			)}
		</div>
	);
}

export default App;
