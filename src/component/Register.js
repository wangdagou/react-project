import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import scss from '../style/register.scss';
import {
  Link
} from 'react-router-dom'
class RegisterUI extends Component {
	componentDidMount() {
		this.props.getData();
	}
	render() {
		return (
		<div id="register">
		  	<div className="top">
				<i className="iconfont">&#xe676;</i>
				<p className="log">注册</p>
				<i className="iconfont">&#xe604;</i>
			</div>
			
			<form className="in">
				<input type="text" placeholder="手机号/邮箱/用户名"/>
				<input type="password" placeholder="密码"/>
				<input type="submit" value="完成注册"/>
				<div className="di">
					<Link to="/logo" className="free">登录</Link>
					<Link to="/" className="forget">忘记密码?</Link>
				</div>
			</form>
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

const Register = connect(mapStateToProps, mapDispatchToProps)(RegisterUI);

export default Register;