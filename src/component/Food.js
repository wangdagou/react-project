import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import scss from '../style/food.scss';
import {
  Link
} from 'react-router-dom'
class FoodUI extends Component {
	componentDidMount() {
		this.props.getData();
	}
	render() {
		return (
		<div id="food">
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
					{this.props.list.map((item,index)=>{
						if(index>2){
						return <li key={item.id}>
									<span className="image"> 
										<img src={item.image_240}/>
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
						}
					})}
				</ul>
				<p className="last">
					<Link to="/">上一页</Link>
					<Link to="/1">下一页</Link>
				</p>
			

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
					type: "FOOD_GET_DATA",
					payload: res.data.data
				})
				console.log(res);
			})
		}
	}
}

const Food = connect(mapStateToProps, mapDispatchToProps)(FoodUI);

export default Food;