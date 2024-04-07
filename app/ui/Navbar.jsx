import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import Image from 'next/image';

export default async function Navbar() {
  //check whether there is a session or not
  const session = await getServerSession(options);
  //console.log(session);

  return (
    <header className="bg-gray-600 text-gray-100 ">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <div className="font-bold text-blue-200 text-4xl">
          GitHub Issue Blog
        </div>

        <div className="flex gap-10">
          {session ? (
            <>
              <Image
                src={session.user.image}
                alt={session.user.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <p>{session.user.name}</p>
              <Link
                href="/api/auth/signout?callbackUrl=/"
                className="px-2 py-1 hover:bg-slate-800"
              >
                LogOut
              </Link>
            </>
          ) : (
            <Link
              href="/api/auth/signin"
              className="px-2 py-1 hover:bg-slate-800"
            >
              LogIn
            </Link>
          )}
          <Link href="/" className="px-2 py-1 hover:bg-slate-800">
            Home
          </Link>
        </div>
      </nav>
    </header>
  );
}
