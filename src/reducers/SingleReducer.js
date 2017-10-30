const SingleReducer = (state=[], action)=>{
	switch(action.type) {
		case 'SINGLE_GET_DATA':
			return action.payload;
		default:
			return state;
	}
}
export default Single;