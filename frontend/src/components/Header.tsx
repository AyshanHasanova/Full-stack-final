import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const Header:React.FC = () => {

    const mobileMenyuDivi= useRef<HTMLDivElement>(null)
   

    const navbarAc = ()=>{
       if(mobileMenyuDivi.current){
        mobileMenyuDivi.current.classList.add("aktiv")
       }
    }
    const navbarBagla = ()=>{
        if(mobileMenyuDivi.current){
            mobileMenyuDivi.current.classList.remove("aktiv")
        }
    }
    const searchDivi = useRef <HTMLDivElement>(null)
         const searchAc =()=>{
            if(searchDivi.current){
                searchDivi.current.classList.add("active")
            }
         }
        const searchBagla =()=>{
            if(searchDivi.current){
                searchDivi.current.classList.remove("active")
            }
        }

  return (
    <>
    {/* Mobile menu start */}
    <div className="mobile-menu" ref={mobileMenyuDivi} >
        <div className="mobile-nav">
          
     
            <div className="search-bar">
                <input type="text" placeholder="Type and hit enter" id="search-input"/>
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
                
             </div>
           
         <ul className="menu">
            <li>
                <Link className="caret" to={"/"}>Home<i className="fa-solid fa-angle-right"></i></Link>
                <ul className="submenu">
                    <li><Link to={"/home 1"}>Home 01</Link></li>
                    <li><a href="#">Home 02</a></li>
                    
                </ul>
            </li>
            <li>
                <Link className="caret" to={"/about us"}>About Us <i className="fa-solid fa-angle-right"></i></Link>
                <ul className="submenu">
                    <li><Link to={"/about us"}>About Us 01</Link></li>
                    <li><a href="#">About Us 02</a></li>
                </ul>
            </li>
    
            <li><Link className="caret" to={"/contact"}>Contact <i className="fa-solid fa-angle-right"></i></Link></li>
            <li><Link className="caret" to={"/Faq"} >FAQ<i className="fa-solid fa-angle-right"></i></Link></li>
            <li><Link className="caret" to={"/store"}>Store<i className="fa-solid fa-angle-right"></i></Link></li>
         </ul>

        
        </div>
        <i onClick={navbarBagla} className="fa-solid fa-x" ></i>
      
           
      
  
    </div>
    {/* Mobile menu end */}


    {/* Serach bar */}

    <div className="search-barr " ref={searchDivi}>
    <div className="search-container">
        <select className="category-select">
            
            <option className='all' >All Categories</option>
            <option>Accessories</option>
            <option>Bodycare</option>
            <option>Haircare</option>
            <option>Skincare</option>
         
          
        </select>
   
        <input type="text" className="search-inputt" placeholder="Type and hit enter"/>
        <button className="search-button"><i className="fa-solid fa-magnifying-glass"></i></button>
        <i onClick={searchBagla} className="fa-solid fa-x " ></i>
    
     
    </div>
    </div>
  







       <header >
      <div className="container head">
        <nav className="navbar">
         <ul>
            <li className="dropdown">
                <Link to="/">Home <i className="fa-solid fa-angle-down"></i></Link>
                <div className="dropdown-menu">
                    <ul>
                        <Link to="/home 1">Home 01</Link>
                        <Link to={"/home 2"}>Home 02</Link>
                    </ul>
                </div>
            </li>
            <li className="dropdown">
                <Link to="/about us">About Us <i className="fa-solid fa-angle-down"></i></Link>
                <div className="dropdown-menu">
                    <ul>
                        <Link to={"/about us1"}><a href="#"></a>About Us 01</Link>
                        <li><a href="#"></a>About Us 02</li>
                    </ul>
                </div>
            </li>
            <Link className='contact'  to="/contact">Contact</Link>
            

          
            <Link className='contact' to={"/Faq"}>FAQ</Link>
            <Link className='contact' to={"/store"}>Store</Link>
         </ul>
       

        </nav>
        <i onClick={navbarAc} className="fa-solid fa-bars"  ></i>

        <div className="logo">
            <img src="https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/logo-black.png" alt="" />
        </div>

        <div className="icons">
            <div className="icon-container">
              
                <div className="icon">
                    <i onClick={searchAc} className="fa-solid fa-magnifying-glass"></i>
                 </div>
 
                
               <div className="icon">
                <i className="fa-regular fa-user"></i>
               </div>
               <div className="icon">
                <i className="fa-regular fa-star"></i>
                <span className="badge">0</span>
               </div>
               <div className="icon">
                    <i className="fa-solid fa-bag-shopping"></i>
                    <span className="badge">0</span>
                </div>
            </div>
               
             
                
          
        
        </div>
      </div>
    </header>
    </>
  )
}

export default Header