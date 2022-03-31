import './Post.css'

function Post({ post }) {
    return (
        <div className='post position-relative'>
            <div className='thumbnail'>
                <img src={post?.thumbnail} alt={"thumbnail"} />
            </div>
            <div className='postBlog text-center'>
                <h3 className='mb-3'>
                    <span dangerouslySetInnerHTML={{ __html: post.title }}></span>
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