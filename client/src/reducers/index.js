import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const initialEntries = []/*[{id: 0, date:"2020-01-01", text:"OwO", author: "Illean", length: 3},
						{id: 1, date:"2020-01-01", text:"Uwu", author: "Illean", length: 3},
						{id: 2, date:"2020-01-01", text:">3<", author: "Illean", length: 3}]*/;

const entryReducer = (entries = initialEntries, action) => {
	if (action.type === 'ADD_ENTRY') {
		console.log(action.payload);
		let entry = action.payload.entry;
		entry.id = action.payload.id;
		return [...entries, entry];
	}
	if (action.type === 'DELETE_ENTRY') {
		return entries.filter((entry) => entry.id !== action.payload);
	}
	if (action.type === 'DELETE_ALL') {
		return [];
	}
	if (action.type === 'FETCH_ENTRIES') {
		return [...action.payload];
	}
	return entries;
};

const store = createStore(combineReducers({ entries: entryReducer }), applyMiddleware(thunk));

export default store;
