'use client';
import { useFormState } from 'react-dom';
import { deletePost } from '../utils/actions';

export default function DeleteForm({ reponame, accountName, number }) {
  const initialState = {
    reponame: reponame,
    accountName: accountName,
    number: number,
    message: null,
    error: {},
  };
  const [state, dispatch] = useFormState(deletePost, initialState);
  return (
    <form
      action={dispatch}
      className="px-3 py-3 rounded-lg bg-red-600 text-slate-50 w-24 text-center"
    >
      <button type="submit">
        <span>Delete</span>
      </button>
    </form>
  );
}
