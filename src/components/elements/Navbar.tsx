"use client"
import Link from 'next/link';
import Image from "next/image";
import { useDispatch, useSelector } from 'react-redux';
import { AuthStateData } from '@/redux/store/Store';
import { logout } from '@/redux/slice/AuthSlice';

const Navbar = () => {

  const user = useSelector((state: AuthStateData) => state.auth.user);
  const dispatch = useDispatch();
  const isLogin = ()=> {
    return user != undefined
  }
  const logoutUser = () => {
    dispatch(logout())
  }
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
            {!isLogin() &&<ul className="hidden md:flex items-center space-x-4">
              <li>
                <Link href="/signin">
                  <p className="text-black ">Login</p>
                </Link>
              </li>
              <li>
                <Link className='' href="/signup">
                  <p className="rounded-md bg-[#336FF9] px-2 py-1 text-white ">Sign Up</p>
                </Link>
              </li>
            </ul>}
            {
              isLogin() && <ul className='flex items-center space-x-4'>
                  <div>
                  <button onClick={logoutUser} className="rounded-md bg-black px-2 py-1 text-white ">Logout</button>
                </div>
              </ul>
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;