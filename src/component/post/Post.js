import { Link } from 'react-router-dom'
import './Post.css'

function Post({ post }) {
    return (
        <div className='post position-relative'>
            <div className='thumbnail'>
                <img src={post?.thumbnail} />
            </div>
            <div className='postBlog text-center'>
                <h3 className='mb-3'>
                <Link to={post.slug}>
                    <span dangerouslySetInnerHTML={{ __html: post.title }}></span>
                </Link>
                </h3>
                <p className='text-small mb-3' dangerouslySetInnerHTML={{ __html: post.excerpt }}></p>
                <ul className='postDetails'>
                    <li>
                        <i className="bi bi-eye"></i> {post.views}
                    </li>
                    <li>
                        <i className="bi bi-calendar-event"></i> {post.date}
                    </li>
                    <li>
                        <i className="bi bi-tags"></i> {post.tags.join(', ')}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Post;