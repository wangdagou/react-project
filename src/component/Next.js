import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import scss from '../style/food.scss';
import {
  Link
} from 'react-router-dom'
class NextUI extends Component {
	componentDidMount() {
		this.props.getData();
	}
	render() {
		return (
		<div id="next">
		啊啊啊啊啊啊啊啊
		</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return {
		list1: state.list1
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		getData: function(){
			axios.get("/index.php?act=index&op=index&ajax=1")
			.then((res)=>{
				dispatch({
					type: "NEXT_GET_DATA",
					payload: res.data.data
				})
				console.log(res);
			})
		}
	}
}

const Next = connect(mapStateToProps, mapDispatchToProps)(NextUI);

export default Next;