import React from 'react'
import {Link} from 'react-router-dom'

export const Sidebar = () => {
    return (
        <div>
            <div class="sidebar-wrapper">
                <nav id="sidebar">
                    <ul class="list-unstyled components">
                    <li>
                        <Link to="/dashboard"><i class="fa fa-tachometer"></i> Dashboard</Link>
                    </li>
            
                    <li>
                        <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i
                            class="fa fa-product-hunt"></i> Products</a>
                        <ul class="collapse list-unstyled" id="productSubmenu">
                            <li>
                            <Link to="/admin/products"><i class="fa fa-clipboard"></i> All</Link>
                            </li>
            
                            <li>
                            <Link to="/admin/product"><i class="fa fa-plus"></i> Create</Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link to ="/admin/orders"><i class="fa fa-shopping-basket"></i> Orders</Link>
                    </li>

                    <li>
                        <Link to="/admin/users"><i class="fa fa-users"></i> Users</Link>
                    </li>

                    <li>
                        <Link to="/admin/reviews"><i class="fa fa-star  "></i>reviews</Link>
                    </li>
            
                </ul>
                </nav>
            </div>
            
        </div>
    )
}
