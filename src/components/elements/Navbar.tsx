import Link from 'next/link';
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white px-4 py-3 fixed w-screen top-0 z-30 border-b border-[#D0DBE7]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Link className='flex space-x-2 items-center' href="/">
            <Image
              src="/trello.svg"
              alt="Trello Logo"
              width={16}
              height={16}
              priority
            />
              <p className="text-black text-xl font-bold">Trello</p>
            </Link>
          </div>
          <div>
            <ul className="hidden md:flex items-center space-x-4">
              <li>
                <Link href="/login">
                  <p className="text-black ">Login</p>
                </Link>
              </li>
              <li>
                <Link className='' href="/signup">
                  <p className="rounded-md bg-[#336FF9] px-2 py-1 text-white ">Sign Up</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;