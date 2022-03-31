import { useEffect, useState } from "react";
import Post from "../post/Post";
import Blogs from "./Blogs";
import Loading from "../blog/LoadingPage";
import React from 'react';




function Blog() {

    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [loading, setLoading] = useState(true)
    const [showMore, setShowMore] = useState(true)

    useEffect(() => {
        loadMore()
        window.scrollTo(0, 0)
    
    }, [])

    function loadMore () {
        setLoading(true)
        fetch(`https://www.wp-course.site/wp-json/youthink/posts?page=${currentPage + 1}`)
            .then((response) => {
                return response.json().then((json) => {
                    const newPosts = json?.data
                    if (Array.isArray(newPosts) && newPosts?.length > 0) {
                        setPosts([...posts, ...newPosts]);
                        setCurrentPage(json?.meta?.current_page)
                    } else {
                        setShowMore(false)
                    }
                    setLoading(true)
                })
            })
            // .catch(e => console.log(e))
    }

    return (
        <Blogs title='Our Latest Posts'>
            <div className="row">
                <div className="col">
                    {posts.map((post, i) => {
                        return <Post post={post} key={i} />
                    })}
                </div>
            </div>

                {/* ///////////////// */}    

            {loading && <div className="row">
                    <div className="col">
                        <Loading />
                    </div>
                </div>
            }
           
                {/* ///////////////// */}

            {showMore && <div className="row">
                    <div className="col text-center">
                        <button className="btn btn-primary" onClick={loadMore}>Load More</button>
                    </div>
                </div>
            }
        </Blogs>
    )
}

export default Blog;