import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        className="logo"
        src="https://res.cloudinary.com/des7uyibo/image/upload/v1612513736/logo_1_riutsp.svg"
        alt="logo"
      />
      <ul className="nav-menu">
        <li>
          <a href="https://www.linkedin.com/in/achyuth-reddy-b85256170/">
            <img
              className="social-network-img"
              src="https://image.flaticon.com/icons/png/512/174/174857.png"
              alt="Linked In"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/achyuth63?tab=repositories">
            <img
              className="social-network-img"
              src="https://image.flaticon.com/icons/png/512/25/25231.png"
              alt="Git Hub"
            />
          </a>
        </li>
        <li>
          <a href="https://learning.ccbp.in/">
            <img
              className="social-network-img"
              src="https://res.cloudinary.com/des7uyibo/image/upload/v1605170763/5f383a4d6a6ea77270c43c01_Nxtwave_256x256_1_v1tqsr.png"
              alt="nxtwave"
            />
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
