const Footer = () => {
  return (
    <div className="bg-orange-500 py-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          DishDash
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <span>About us</span>
          <span>Contant us</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
