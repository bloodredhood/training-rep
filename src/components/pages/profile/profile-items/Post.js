import React from "react";
import "./Post.css"

const Post = (props) => {

	return (
		<div className='postCommon'>
			<div className='postHead'>
				<div  className='postHead'>
					<div className='miniAva'>
						mini-ava
						<img href="" alt="" />
					</div>
					<div>
						<a className='postLink' href='http://localhost:3000/'>Profile Name</a>
						<p className='weakText'>post date</p>
					</div>
				</div>
				<div>
					post options
				</div>
			</div>
			<div className='postMain'>
				<div>{props.text}</div>
				<div className='postImg'>
					image added to post
					<img src="" alt="" />
				</div>
			</div>
			<div className='postFoot'>
				<div className='postFootItem'>
					<div>
						like
					</div>
					<p className='weakText'>
						{props.likesCount}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Post