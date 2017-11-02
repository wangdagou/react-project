const DetailsReducer = (state={aa:{},bb:{},cc:[],dd:[]}, action)=>{
	switch(action.type) {
		case 'DETAILS_GET_DATA':
			return action.payload;
		default:
			return state;
	}
}
export default DetailsReducer;