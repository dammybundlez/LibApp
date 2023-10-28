import React , { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"
import './index.css';
import Navbar from "./Components/Navbar";
import Recommended from "./Components/Recommended";
import TableView from "./Components/TableView";
import Pagination from "./Components/Pagination";
import Footer from "./Components/Footer";


const App = () => {
  const [discover, setDiscover] = useState([]);
  const [table , setTable] = useState([])
  const [searchDisplay, setSearchDisplay] = useState([])
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

 
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = table.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = e => setCurrentPage(e);

  const discoverData = () => {
		axios.get(`https://www.googleapis.com/books/v1/volumes?q=fight&api_key=${process.env.PRIVATE_KEY}`)
		.then(res=>setDiscover(res.data.items))
            .catch(err=>console.log(err))
		}	
		useEffect(() => {
			discoverData(discover);
		}, [discover]);

    const tableData = () => {   
		axios.get(`https://www.googleapis.com/books/v1/volumes?q=fly&api_key=${process.env}&maxResults=40`)
		.then(res=>setTable(res.data.items))
            .catch(err=>console.log(err))
		}
		useEffect(() => {
			tableData(table);
		}, [table]);

    const searcData = (search) => {   
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&api_key=${process.env.PRIVATE_KEY}`)
      .then(res=>setSearchDisplay(res.data.items))
              .catch(err=>console.log(err))
      }
      useEffect(() => {
        searcData(search);
      }, [search]);

  return (
    <div>
      <Navbar search ={search} setSearch = {setSearch} searchDisplay = {searchDisplay}/>
        {/* <Search  /> */}
      <main className="bg-gray-700 mt-2 lg:mt-14">
        <Recommended discover = {discover} />
        <TableView table = {currentPosts} />
        <Pagination
        postsPerPage={postsPerPage}
        totalPosts={table.length}
        paginate={paginate}
      indexOfLastPost = {indexOfLastPost}
      indexOfFirstPost = {indexOfFirstPost}
      />
      <Footer/>
      </main>
  </div>
  )
}


export default App;