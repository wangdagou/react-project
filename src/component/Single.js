import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import "../style/single.scss";
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import {
  Link
} from 'react-router-dom';
class SingleUI extends Component {
	componentDidMount() {
		this.props.getData();
	}
	render() {
	var item = null;
		if(this.props.list.list){
			item=this.props.list.list.map((item,index)=>{
							return <li key={item.id}>
							<a href="#">
							<img src={item.icon_url}/>
							</a>
							<span>{item.name}</span>
							</li>
						})
		}
	var items = null;
		if(this.props.list.list1){
			items = this.props.list.list1.map((item,index)=>{
							return <li key={item.id}>
							<Link to={"/details/"+item.id}>
							<img src={item.image_240}/>
							</Link>
							<div className="content">
							<p className="one">
									{item.store_name}{item.msg_name}
										<span>
											{item.city_name}
										</span>
							</p>
							<p className="two">
									{item.subtitle}
							</p>
							<p className="three">
									￥{item.price}
										<i>/</i>
										<span className="jiage">
											{item.origin_price}
										</span>
										<span className="renqi">
										<i></i>
											{item.buy_num}
										</span>
							</p>
							</div>
							</li>			
			})
		}
		return (
			<div id="single">
			<header>
			<div className="top">
				<div className="left"><a href="#">桐乡</a><i className="iconfont">&#xe8ca;</i></div>
				<p></p>
				<div className="right"><i></i><a href="#">我的</a></div>
			</div>
			
			</header>
			<div className="bottom">
			<i></i>
			<input type="text" placeholder="输入商家名字/商品名称获取优惠"/>
			</div>
				<div className="swipe">
					<Carousel
					      className="my-carousel" autoplay={true} infinite
					     
					    >
					      {['05472216619378021', '05265618512612441', '05324532026713205'].map(ii => (
					        <a href="#" key={ii}><img src={`http://group.1c10.cn/data/upload/shop/adv/${ii}.jpg`} /></a>
      						))}
    				</Carousel>
				</div>
				<div className="nav">
					<ul>
						{item}
					</ul>
				</div>
				<div className="section">
					<p className="tuijian">本周推荐</p>
					<ul>
						{items}
					</ul>
				</div>
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
		list: state.list,
		list1:state.list1
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		getData: function(){
			axios.get("/index.php?act=index&op=index&ajax=1")
			.then((res)=>{
				console.log(res)
				dispatch({
					type: "SINGLE_GET_DATA",
					payload:{ 
						list:res.data.category,
						list1:res.data.data
					}
				})
			})
		}
	}
}

const Single = connect(mapStateToProps, mapDispatchToProps)(SingleUI);

export default Single;