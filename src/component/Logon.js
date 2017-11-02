import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import scss from '../style/logon.scss';
import {
  Link
} from 'react-router-dom'
class LogonUI extends Component {
	componentDidMount() {
		this.props.getData();
	}
	render() {
		return (
		<div id="logon">
		  	<div className="top">
				<i className="iconfont">&#xe676;</i>
				<p className="log">登录</p>
				<i className="iconfont">&#xe604;</i>
			</div>
			<div className="in">
				<input type="text" placeholder="手机号/邮箱/用户名"/>
				<input type="password" placeholder="密码"/>
				<input type="submit" value="登录"/>
				<div className="di">
					<Link to="/register" className="free">免费注册</Link>
					<p className="forget">忘记密码?</p>
				</div>
		</div>
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
			axios.get("/list.html?cate=meishi&curpage=2&ajax=1")
			.then((res)=>{
				console.log(res)
				dispatch({
					type: "NEXT_GET_DATA",
					payload: res.data.data
				})
				console.log(res);
			})
		}
	}
}

const Logon = connect(mapStateToProps, mapDispatchToProps)(LogonUI);

export default Logon;