import types from './formType';

const INITIAL_STATE = {
	q1: '',
	q2: '',
	q3: '',
	q4: '',
	q5: '',
	q6: '',
	q7: ''
};

const formReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.q1: return ({
			...state,
			q1: action.payload
		});
		case types.q2: return ({
			...state,
			q2: action.payload
		});
		case types.q3: return ({
			...state,
			q3: action.payload
		});
		case types.q4: return ({
			...state,
			q4: action.payload
		});
		case types.q5: return ({
			...state,
			q5: action.payload
		});
		case types.q6: return ({
			...state,
			q6: action.payload
		});
		case types.q7: return ({
			...state,
			q7: action.payload
		});
        default: return ({
            ...state
        });
	}
};

export default formReducer;