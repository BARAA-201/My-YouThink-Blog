import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Footer(){
    const subEmail = useRef()
    const [loading, setLoading] = useState(false)
    const [subEmailResponse, setSubEmailResponse] = useState({})

    function submitSub(e)  {
        e.preventDefault()
    }

    function subscribe() {
        setLoading(true)
        fetch('https://www.wp-course.site/wp-json/youthink/subscribe', {
            method: 'post',
            body: JSON.stringify({email: subEmail.current.value}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            response.json().then((json) => {
                setSubEmailResponse(json)
                setLoading(false)
            }).catch(e => console.log(e))
        })
        .catch(e => console.log(e))
    }

    return (
        <section className="border-top bg-light">
            <div className="container">
                <footer className="py-5">
                    <div className="row">
                        <div className="col-12 col-sm-4 col-lg-2 mt-3 mt-sm-0">
                            <h5>INFO-1</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Features</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Pricing</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">FAQs</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">About</Link></li>
                            </ul>
                        </div>

                        <div className="col-12 col-sm-4 col-lg-2 mt-3 mt-sm-0">
                            <h5>INFO-2</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Features</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Pricing</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">FAQs</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">About</Link></li>
                            </ul>
                        </div>

                        <div className="col-12 col-sm-4 col-lg-2 mt-3 mt-sm-0">
                            <h5>INFO-3</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Features</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Pricing</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">FAQs</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">About</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 mt-3 mt-lg-0 offset-lg-1">
                            <form onSubmit={submitSub}>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of whats new and exciting from us.</p>
                                <div className="d-flex w-100 gap-2">
                                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" ref={subEmail} />
                                    <button disabled={loading} className="btn btn-primary" type="button" onClick={subscribe}>
                                    {loading ? <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>: <>Subscribe</>} 
                                    </button>
                                </div>
                                {subEmailResponse.message && <p className="mt-2" style={{color: subEmailResponse.success ? 'green':'red'}}>
                                    {subEmailResponse.message}
                                </p>}
                            </form>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between py-4 my-4 ">
                        <p>© 2021 Company, Inc. All rights reserved.</p>
                        <div className="d-flex justify-content-between ">
                            <ul className="list-unstyled d-flex" >
                                <li className="justify-content-sm-between ms-3" id='icon1'>
                                    <a className="link-dark" href='https://www.facebook.com/Youthink-Academy-106426598250423/'><h3><i class="bi bi-facebook"></i></h3>
                                    </a>
                                </li>
                                <li className="justify-content-sm-between ms-3 "  id='icon2'>
                                    <a className="link-dark" href='https://www.instagram.com/youthinkacademy_/'><h3><i class="bi bi-instagram"></i></h3></a>
                                   
                                </li>
                                <li className="justify-content-sm-between ms-3 "  id='icon3'>
                                    <a className="link-dark" href='https://www.linkedin.com/company/youthink-academy/'><h3><i class="bi bi-linkedin"></i></h3>
                                    </a>
                                </li>
                                
                                
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    )

}
export default Footer;