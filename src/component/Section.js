import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import scss from '../style/food.scss';
import {
  Link
} from 'react-router-dom'
class SectionUI extends Component {
	componentDidMount() {
		this.props.getData();
	}
	render() {
		return (
		<div id="section">
		<div className="header">
				<i className="iconfont">&#xe676;</i>
				<span></span>
				<input type="text" placeholder="请输入您想找的优惠"/>
			</div>

			<div className="nav">
				<ul className="navson">
					<li>美食<i className="iconfont">&#xe8ca;</i><a>|</a></li>
					<li>商圈<i className="iconfont">&#xe8ca;</i><a>|</a></li>
					<li>默认排序<i className="iconfont">&#xe8ca;</i></li>
				</ul>
				</div>
				<ul className="foods">
					{this.props.list2.data.map((item,index)=>{
						return <li key={item.id}>
									<span className="image"> 
										<img src={item.image_1280}/>
									</span>
									<div className="p">
										<p className="p2">{item.store_name}{item.msg_name}</p>
										<span className="zhe">{item.subtitle}</span>
										<div className="or-price">
										<span className="price">￥{item.price}</span>
										<span className="price1">{item.origin_price}</span>  
									</div>
									</div>
									
								</li>
						
					})}
				</ul>
				<p className="last">
					<Link to="/1">上一页</Link>
					<Link to="/register">下一页</Link>
				</p>
			
				<div className="footer">
					<div className="footer_top">
						<button className="bnt">查看全部优惠</button>
						<a href="#">返回顶部</a>
					</div>
					<div className="footer_center">
							<button>登录</button>
							<button>注册</button>
							<div className="footer_right">
							<p>
								城市:
							</p>
							<span>
								桐乡
								<i className="iconfont">&#xe8ca;</i>
							</span>
							</div>
					</div>
					<div className="footer_bottom">
						<ul>
							<li><a href="">首页</a></li>
							<li><a href="">电脑版</a></li>
							<li><a href="">客户端</a></li>
							<li><a href="">关于我们</a></li>
							<li><a href="">信息反馈</a></li>
							<li className="border"><a href="#">帮助</a></li>
						</ul>
					</div>
				</div>
				<div className="photo">
				</div>
		</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return {
		list2: state.list2
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		getData: function(){
			axios.get("/list.html?cate=meishi&curpage=3&ajax=1")
			.then((res)=>{
				console.log(res)
				dispatch({
					type: "SECTION_GET_DATA",
					payload: res.data
				})
				console.log(res);
			})
		}
	}
}

const Section = connect(mapStateToProps, mapDispatchToProps)(SectionUI);

export default Section;