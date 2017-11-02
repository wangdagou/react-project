import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import "../style/details.scss";
import { Carousel, WhiteSpace } from 'antd-mobile';
import {
  Link
} from 'react-router-dom';
class DetailsUI extends Component {
	componentDidMount() {
		this.props.getData();
	}
	render() {
		return (
			<div id="details">
				<div className="details_header">
					<Link className="fan" to="/"><i className="iconfont">&#xf0343;</i></Link>
						<div>优惠详情</div>
					<Link to="/">
						<i className="iconfont">&#xe605;</i>
					</Link>
				</div>
				<div className="details_main">
					<div className="photo">
						<img src={this.props.ss.aa.image_320}/>
					</div>
					<div className="details_jiage">
						<p className="qian">
							<u>￥</u>{this.props.ss.aa.price}
							<i>/</i>
							<span className="wang">
								{this.props.ss.aa.origin_price}
							</span>
						</p>
						<span className="qianggou">立即抢购</span>
					</div>
					<div className="name">
						<p className="mingzi">
						{this.props.ss.aa.store_name}
							<span>
								{this.props.ss.aa.msg_name}
							</span>
							<p className="chaozhi">{this.props.ss.aa.subtitle}</p>
						</p>
						
						<p className="ren"><i></i>{this.props.ss.aa.buy_num}人已购买</p>
						<p className="pingjia"><i className="iconfont">&#xe576;</i><i className="iconfont">&#xe576;</i><i className="iconfont">&#xe576;</i><i className="iconfont">&#xe576;</i><i className="iconfont">&#xe576;</i>暂无评价</p>
					</div>
					<div className="dizhi">					
						<p className="mingzia"><i className="iconfont">&#xe501;</i>{this.props.ss.bb.name}</p>
						<p className="xiangxi">{this.props.ss.bb.address}</p>
						<a href="#" className="tel"></a>
					</div>
					<div className="taocan">
						{this.props.ss.cc.map((it,index)=>{
							return <div className="one" key={it.id}>
								<dt>{it.name}<span className="qian_one">￥{it.origin_price}</span><span className="qian_two">￥{it.price}</span></dt>
								<span className="taocan_one">{it.data[0].title}</span>
								{it.data[0].list.map((ite,index)=>{
							return <div className="list" key={ite.id}>
								<p>{ite.name}<span className="fen">{ite.price}</span><span className="yuan">{ite.amount}</span></p>
							</div>
						})}
							</div>
						})}
					</div>
					<div className="tishi">
						<p className="xiaofei">消费提示</p>
						{this.props.ss.dd.map((ita,index)=>{
							return <div className="tou" key={ita.id}>
								{ita.title}
								{ita.info.map((itc,index)=>{
									return <p key={itc.id}>
										-{itc}
									</p>
								})}
							</div>
						})}
					</div>
					<div className="xiazai">
						<p>免费下载</p>
					</div>
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
				<div className="photoa">
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return {
		 ss:state.ss
		
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		getData: function(){
			axios.get(`/index.php?act=deal&op=index&id=${this.match.params.id}&ajax=1`)
			.then((res)=>{
				dispatch({
					type: "DETAILS_GET_DATA",
					payload:{
						aa : res.data.youhui_info,
						bb : res.data.store,
						cc : res.data.table_list,
						dd : res.data.buyinfo_list
					}
				})

				console.log(res);
			})
		}
	}
}

const Details = connect(mapStateToProps, mapDispatchToProps)(DetailsUI);

export default Details;