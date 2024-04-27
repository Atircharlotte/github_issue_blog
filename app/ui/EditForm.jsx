'use client';
import { useFormState } from 'react-dom';
import { editPost } from '../utils/actions';
import Link from 'next/link';

export default function EditForm({
  reponame,
  accountName,
  number,
  originalContent,
}) {
  const initialState = {
    reponame: reponame,
    accountName: accountName,
    number: number,
    message: null,
    error: {},
  };
  const [state, dispatch] = useFormState(editPost, initialState);
  return (
    <div className="mx-5 my-5">
      <h1>Edit Post in Repo: {reponame}</h1>
      <form action={dispatch}>
        {/*fill out the form */}
        <div className="rounded-md bg-gray-50 p-4 md:p-6 mt-5">
          {/*title */}
          <div className="mb-4">
            <label htmlFor="title" className="mb-2 block text-sm font-medium">
              Your Title:
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Enter your title"
                  defaultValue={originalContent.title}
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  required
                />
              </div>
            </div>
          </div>
          {/*body */}
          <div className="mb-4">
            <label htmlFor="body" className="mb-2 block text-sm font-medium">
              Your Content:
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <textarea
                  id="content"
                  name="content"
                  type="text"
                  rows="10"
                  placeholder="Enter your content"
                  defaultValue={originalContent.body}
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  required
                  minLength="30"
                />
              </div>
            </div>
          </div>
        </div>
        {/*cancel and edit post button */}
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href={`/${reponame}`}
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <button type="submit">Edit Post</button>
        </div>
      </form>
    </div>
  );
}
