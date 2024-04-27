import { getAuthorRepos } from '../utils/data';

import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import SidebarNavLinks from './SidebarNavLinks';

export default async function Sidebar() {
  const session = await getServerSession(options);
  const repoList = await getAuthorRepos(session?.user?.name);

  return (
    <>
      {!session && (
        <div className="flex w-1/4 bg-slate-500 h-screen ">
          <h1 className="font-normal text-2xl text-slate-200 px-3 py-3">
            Log in to browse your repos
          </h1>
        </div>
      )}

      {repoList && (
        <div className="flex w-1/4 bg-slate-500 h-screen">
          <SidebarNavLinks repoList={repoList} />
        </div>
      )}
    </>
  );
}
