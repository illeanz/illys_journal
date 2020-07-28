export const fetchEntries = () => {
	return function (dispatch, getState) {
		return fetch(`/entries`)
			.then(entry => entry.json())
			.then(entry => {
					dispatch({
						type: "FETCH_ENTRIES",
						payload: entry
					});
				}
			).catch(err => console.log(err));
	};
};

export const addEntry = entry => {
	let id = Date.now();
	return function (dispatch, getState) {
		return fetch(`/entries`, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				id: id,
				date: entry.date,
				text: entry.text,
				author: entry.author,
				length: entry.length
			})
		}).then((res) => {
				console.log(res);
				dispatch({
					type: 'ADD_ENTRY',
					payload: {
						entry: entry,
						id: id
					}
				})
				return res.success;
			})
			.catch((error) => {
				console.error(error);
			});
	};
};

export const deleteEntry = id => {
	return function (dispatch, getState) {
		return fetch(`/entries`, {
			method: 'DELETE',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				id: id
			})
		}).then((res) => {
			console.log(res);
			dispatch({
				type: 'DELETE_ENTRY',
				payload: id
			})
			return res.success;
		})
			.catch((error) => {
				console.error(error);
			});
	};
};

export const deleteAllEntries = () => {
	return function (dispatch, getState) {
		return fetch(`/entries`, {
			method: 'DELETE',
			headers: {'Content-Type': 'application/json'}
		}).then((res) => {
			console.log(res);
			dispatch({
				type: 'DELETE_ALL'
			})
			return res.success;
		})
			.catch((error) => {
				console.error(error);
			});
	};
};
