import Link from 'next/link';
import { PencilIcon, PlusIcon } from '@heroicons/react/24/outline';

export function CreateIssue({ reponame }) {
  return (
    <Link
      href={`/${reponame}/create`}
      className="flex h-10 items-center rounded-lg bg-slate-800 px-4 text-sm font-medium text-white transition-colors hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block ">Create</span>
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}
export function CreateGitHubAccount() {
  return (
    <Link href="https://github.com/" target="_blank">
      <span className="rounded-lg bg-slate-500 text-white px-3 py-3 hover:bg-slate-800">
        Create GitHub Account
      </span>
    </Link>
  );
}
export function UpdateIssue({ reponame, number }) {
  return (
    <Link
      href={`/${reponame}/${number}/edit`}
      className=" w-24 text-center flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Update Post</span>
      <PencilIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function BackToIssueList({ reponame }) {
  return (
    <div className="px-3 py-3 rounded-lg bg-zinc-600 text-slate-50 w-24 text-center">
      <Link href={`/${reponame}`}>
        {' '}
        <span className="hidden md:block ">Back</span>
      </Link>
    </div>
  );
}
