import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import "../style/single.scss"
class SingleUI extends Component {
	componentDidMount() {
		this.props.getData();
	}
	render() {
		return (
			<div id="single">
			<header>
			<div className="top">
				<div className="left"><a href="#">桐乡</a><i className="iconfont">&#xe8ca;</i></div>
				<p></p>
				<div className="right"><i></i><a href="#">我的</a></div>
			</div>
			<div className="bottom">
			<i></i>
			<input type="text" placeholder="输入商家名字/商品名称获取优惠"/>
			</div>
			</header>

				<ul>
				
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return {
		list: state.list
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		getData: function(){
			axios.get("/index.php?act=index&op=index&ajax=1")
			.then((res)=>{
				dispatch({
					type: "SINGLE_GET_DATA",
					payload: res.data
				})
				console.log(res);
			})
		}
	}
}

const Single = connect(mapStateToProps, mapDispatchToProps)(SingleUI);

export default Single;