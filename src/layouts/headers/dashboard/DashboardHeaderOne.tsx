import { useState } from 'react';
import { Link } from 'react-router-dom';

const DashboardHeaderOne = ({ isActive, setIsActive }: any) => {

   const [pathname, setPathname] = useState(window.location.pathname);

   const handleNavigation = (path: any) => {
      setPathname(path);
      setIsActive(false);
   };

   return (
      <aside className={`dash-aside-navbar ${isActive ? "show" : ""}`}>
         <div className="position-relative">
            <div className="logo d-md-block d-flex align-items-center justify-content-between plr bottom-line pb-30">
               <Link to="/dashboard-index">
                  <img src="/assets/images/logo/logo_01.svg" alt="" />
               </Link>
               <button onClick={() => setIsActive(false)} className="close-btn d-block d-md-none"><i className="fa-light fa-circle-xmark"></i></button>
            </div>
            <nav className="dasboard-main-nav pt-30 pb-30 bottom-line">
               <ul className="style-none">
                  <li className="plr">
                     <Link to="/dashboard/dashboard-index" className={`d-flex w-100 align-items-center ${pathname === '/dashboard/dashboard-index' ? 'active' : ''}`} onClick={() => handleNavigation('/dashboard/dashboard-index')}>
                        <img src={pathname === '/dashboard/dashboard-index' ? "/assets/images/dashboard/icon/icon_1_active.svg" : "/assets/images/dashboard/icon/icon_1.svg"} alt="" />
                        <span>Dashboard</span>
                     </Link>
                  </li>
                  <li className="plr">
                     <Link to="/dashboard/message" className={`d-flex w-100 align-items-center ${pathname === '/dashboard/message' ? 'active' : ''}`} onClick={() => handleNavigation('/dashboard/message')}>
                        <img src={pathname === '/dashboard/message' ? "/assets/images/dashboard/icon/icon_2_active.svg" : "/assets/images/dashboard/icon/icon_2.svg"} alt="" />
                        <span>Staking</span>
                     </Link>
                  </li>
                  <li className="bottom-line pt-30 lg-pt-20 mb-40 lg-mb-30"></li>
                  <li><div className="nav-title">Profile</div></li>
                  <li className="plr">
                     <Link to="/dashboard/profile" className={`d-flex w-100 align-items-center ${pathname === '/dashboard/profile' ? 'active' : ''}`} onClick={() => handleNavigation('/dashboard/profile')}>
                        <img src={pathname === '/dashboard/profile' ? "/assets/images/dashboard/icon/icon_3_active.svg" : "/assets/images/dashboard/icon/icon_3.svg"} alt="" />
                        <span>Profile</span>
                     </Link>
                  </li>
                  <li className="plr">
                     <Link to="/dashboard/account-settings" className={`d-flex w-100 align-items-center ${pathname === '/dashboard/account-settings' ? 'active' : ''}`} onClick={() => handleNavigation('/dashboard/account-settings')}>
                        <img src={pathname === '/dashboard/account-settings' ? "/assets/images/dashboard/icon/icon_4_active.svg" : "/assets/images/dashboard/icon/icon_4.svg"} alt="" />
                        <span>Account Settings</span>
                     </Link>
                  </li>
                  <li className="plr">
                     <Link to="/dashboard/membership" className={`d-flex w-100 align-items-center ${pathname === '/dashboard/membership' ? 'active' : ''}`} onClick={() => handleNavigation('/dashboard/membership')}>
                        <img src={pathname === '/dashboard/membership' ? "/assets/images/dashboard/icon/icon_5_active.svg" : "/assets/images/dashboard/icon/icon_5.svg"} alt="" />
                        <span>Membership</span>
                     </Link>
                  </li>
                  <li className="bottom-line pt-30 lg-pt-20 mb-40 lg-mb-30"></li>
                  <li><div className="nav-title">OLYM3 - Real-World Assets</div></li>
                  <li className="plr">
                     <Link to="/dashboard/properties-list" className={`d-flex w-100 align-items-center ${pathname === '/dashboard/properties-list' ? 'active' : ''}`} onClick={() => handleNavigation('/dashboard/properties-list')}>
                        <img src={pathname === '/dashboard/properties-list' ? "/assets/images/dashboard/icon/icon_6_active.svg" : "/assets/images/dashboard/icon/icon_6.svg"} alt="" />
                        <span>My Properties</span>
                     </Link>
                  </li>
                  <li className="plr">
                     <Link to="/dashboard/add-property" className={`d-flex w-100 align-items-center ${pathname === '/dashboard/add-property' ? 'active' : ''}`} onClick={() => handleNavigation('/dashboard/add-property')}>
                        <img src={pathname === '/dashboard/add-property' ? "/assets/images/dashboard/icon/icon_7_active.svg" : "/assets/images/dashboard/icon/icon_7.svg"} alt="" />
                        <span>Add New Property</span>
                     </Link>
                  </li>
                  <li className="plr">
                     <Link to="/dashboard/add-property-thomson" className={`d-flex w-100 align-items-center ${pathname === '/dashboard/add-property-thomson' ? 'active' : ''}`} onClick={() => handleNavigation('/dashboard/add-property-thomson')}>
                        <img src={pathname === '/dashboard/add-property-thomson' ? "/assets/images/dashboard/icon/icon_7_active.svg" : "/assets/images/dashboard/icon/icon_7.svg"} alt="" />
                        <span>Thomson Add Prop</span>
                     </Link>
                  </li>
                  <li className="plr">
                     <Link to="/dashboard/favourites" className={`d-flex w-100 align-items-center ${pathname === '/dashboard/favourites' ? 'active' : ''}`} onClick={() => handleNavigation('/dashboard/favourites')}>
                        <img src={pathname === '/dashboard/favourites' ? "/assets/images/dashboard/icon/icon_8_active.svg" : "/assets/images/dashboard/icon/icon_8.svg"} alt="" />
                        <span>Favourites</span>
                     </Link>
                  </li>
                  <li className="plr">
                     <Link to="/dashboard/saved-search" className={`d-flex w-100 align-items-center ${pathname === '/dashboard/saved-search' ? 'active' : ''}`} onClick={() => handleNavigation('/dashboard/saved-search')}>
                        <img src={pathname === '/dashboard/saved-search' ? "/assets/images/dashboard/icon/icon_9_active.svg" : "/assets/images/dashboard/icon/icon_9.svg"} alt="" />
                        <span>Saved Search</span>
                     </Link>
                  </li>
                  <li className="plr">
                     <Link to="/dashboard/review" className={`d-flex w-100 align-items-center ${pathname === '/dashboard/review' ? 'active' : ''}`} onClick={() => handleNavigation('/dashboard/review')}>
                        <img src={pathname === '/dashboard/review' ? "/assets/images/dashboard/icon/icon_10_active.svg" : "/assets/images/dashboard/icon/icon_10.svg"} alt="" />
                        <span>Reviews</span>
                     </Link>
                  </li>
               </ul>
            </nav>
            <div className="profile-complete-status bottom-line pb-35 plr">
               <div className="progress-value fw-500">82%</div>
               <div className="progress-line position-relative">
                  <div className="inner-line" style={{ width: "80%" }}></div>
               </div>
               <p>Profile Complete</p>
            </div>

            <div className="plr">
               <Link to="#" className="d-flex w-100 align-items-center logout-btn">
                  <div className="icon tran3s d-flex align-items-center justify-content-center rounded-circle"><img src="/assets/images/dashboard/icon/icon_41.svg" alt="" /></div>
                  <span>Logout</span>
               </Link>
            </div>
         </div>
      </aside>
   )
}

export default DashboardHeaderOne;
