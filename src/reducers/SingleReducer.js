const SingleReducer = (state={}, action)=>{
	switch(action.type) {
		case 'SINGLE_GET_DATA':
		console.log(action.payload)
			return action.payload;
		default:
			return state;
	}
}
export default SingleReducer;