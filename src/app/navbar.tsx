import Link from "next/link";
function Navbar() {
  return (<>
  <nav className="bg-slate-900 mt-0 ">
        <ul className="inline-flex pl-40 pt-4  font-sans font-bold text-gray-400 ">
          <span className="text-2xl pb-3 mr-40 text-white hover:text-slate-400">Huzaifa_Abdulrab</span>
          <Link href="home">
            <li className="pl-80 ml-50 mb-3 hover:text-slate-100">Home</li>
          </Link>
            <Link href="/about">
            <li className="ml-40 hover:text-slate-100">About </li></Link>
          <Link href="service">
            <li className="ml-40 hover:text-slate-100">Serives</li>
          </Link>
          <Link href="contact">
            <li className="ml-40 hover:text-slate-100">Contact</li>
          </Link>
        </ul>
      </nav>
      
  </>);
}
export default Navbar