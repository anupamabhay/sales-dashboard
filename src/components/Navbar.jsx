import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <ul className='nav-list'>

                    <li>    
                        <a href="#" id='nav-dashboard'>Dashboard</a>
                    </li>  
                    <li>    
                        <a href="#">Inventory</a>
                    </li>  
                    <li>    
                        <a href="#">Order</a>
                    </li>  
                    <li>    
                        <a href="#">Returns</a>
                    </li>  
                    <li>    
                        <a href="#">Customers</a>
                    </li>  
                    <li>    
                        <a href="#">Shipping</a>
                    </li>  
                    <li>    
                        <a href="#">Channel</a>
                    </li>  
                    <li>    
                        <a href="#">Integrations</a>
                    </li>  
                    <li>    
                        <a href="#">Calculators</a>
                    </li>  
                    <li>    
                        <a href="#">Reports</a>
                    </li>  
                    <li>    
                        <a href="#">Account</a>
                    </li>  
                                        
                </ul>
            </nav>
        </>
    )
}

export default Navbar