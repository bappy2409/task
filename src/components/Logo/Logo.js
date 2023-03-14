import "./Logo.css";
const Logo = ({ image }) => {
  return (
    <div className="site-logo">
      <img src={image} alt="" />
    </div>
  );
};
export default Logo;
