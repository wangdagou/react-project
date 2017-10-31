const NextReducer = (state=[], action)=>{
	switch(action.type) {
		case 'NEXT_GET_DATA':
			return action.payload;
		default:
			return state;
	}
}
export default NextReducer;