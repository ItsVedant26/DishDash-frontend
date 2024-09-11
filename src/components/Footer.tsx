const Footer = () => {
  return (
    <div className="bg-orange-500 py-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          DishDash
        </span>
        <span className="text-white font-semibold mt-4 md:mt-0 tracking-tight text-center md:text-right">
          <span>Developed by Vedant Patel</span>
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <span>About us</span>
          <span>Contact us</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
