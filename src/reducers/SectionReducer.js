const SectionReducer = (state={data:[]}, action)=>{
	switch(action.type) {
		case 'SECTION_GET_DATA':
			return action.payload;
		default:
			return state;
	}
}
export default SectionReducer;