import profile from '../../assets/images/profile.png';
const Header = () => {
  return (
    <div className="bg-[#6047EC1A] py-4">
      <div className="flex justify-between w-[85%] mx-auto ">
        <h2 className="text-4xl font-bold">knowledge Cafe</h2>
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Header;
