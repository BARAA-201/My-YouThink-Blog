
import Sidebar from "../sideBar/Sidebar"

function Blogs({ title, children })  {
    return (
        <div>
            <section className="py-5 mb-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 dangerouslySetInnerHTML={{__html: title}}></h1>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">{children}</div>
                        
                        <Sidebar />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blogs;