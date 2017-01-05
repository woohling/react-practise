/**
 * Created by EmmaWu on 2017/1/5.
 */
import React, { PropTypes, Component } from 'react'

export default class Posts extends Component {
    render() {
        return (
            <ul>
                {this.props.posts.map((post, i) =>
                    <li key={i}>{post.title}</li>
                )}
            </ul>
        )
    }
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired
}
// import React, { Component, PropTypes } from 'react'
//
// export default class Posts extends Component {
//     render() {
//         return (
//             <ul>
//                 {this.props.posts.map((post, i) => {
//                     <li key={i}> {post.title} </li>
//                 })}
//             </ul>
//         )
//     }
// }