const FoodReducer = (state=[], action)=>{
	switch(action.type) {
		case 'FOOD_GET_DATA':
			return action.payload;
		default:
			return state;
	}
}
export default FoodReducer;