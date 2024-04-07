'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function SidebarNavLinks({ repoList }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      <h1 className="font-normal text-xl text-slate-200 px-3 py-3 overflow-y-auto">
        {repoList.map((repo) => (
          <Link
            href={`/${repo.name}`}
            key={repo.id}
            className={clsx({
              'bg-slate-800 text-white': pathname === repo.href,
            })}
          >
            <div className="mx-5 my-5 px-2 py-2 no-underline hover:bg-slate-800 hover:text-white">
              <p>{repo.name}</p>
            </div>
          </Link>
        ))}
      </h1>
    </>
  );
}
