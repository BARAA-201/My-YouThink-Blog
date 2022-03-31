import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import Home from './component/home/Home';
import Blogs from './component/blog/Blogs';
import PostData from './component/post/PostData';
import Footer from './component/footer/Footer';
import './App.css';

function App() {
	return (
    <Fragment>
		<Navbar />
		<Routes>
			<Route path='/' exact element={<Home />}></Route>
			<Route path='/blogs' exact element={<Blogs />}></Route>
			<Route path='/blog/:slug' element={<PostData />}></Route>
		</Routes>
		<Footer />
	</Fragment>
	);
}

export default App;
