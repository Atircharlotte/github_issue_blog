import Image from 'next/image';
import { CreateGitHubAccount } from './Button';

export default function IntroSection() {
  return (
    <main className="bg-slate-300 mx-5 my-5 divide-y-2 divide-slate-950 h-screen px-4 rounded-md overflow-y-auto">
      <div className="flex place-content-start items-center">
        <Image
          src="/githubwhite.jpg"
          alt="githublogo"
          width={100}
          height={100}
          className="my-3"
        />
        <h1 className="font-bold text-5xl mx-3">GitHub Issue Blog</h1>
      </div>
      <div className="my-5">
        <h1 className="my-5 text-4xl">Get started with GitHub Issue Blog</h1>
        <p className="leading-loose my-5">
          Interface for GitHub users to write blog
          <br />
          No need to directly edit in GitHub,
          <br />
          With GitHib Issue Blog, you can create, update, even delete your
          posts.
          <br />
          Play the LogIn button to get started✍️
          <br />
          No GitHub account yet? No worries!
          <br />
          Start your journey from the button below👇
        </p>

        <CreateGitHubAccount />
      </div>
      <div className="mt-8">
        <h1 className="my-5 text-4xl">Get started with GitHub Issue Blog</h1>
        <p className="leading-loose my-5">
          Interface for GitHub users to write blog
          <br />
          No need to directly edit in GitHub,
          <br />
          With GitHib Issue Blog, you can create, update, even delete your
          posts.
          <br />
          Play the LogIn button to get started✍️
          <br />
          No GitHub account yet? No worries!
          <br />
          Start your journey from the button below👇
        </p>
      </div>
    </main>
  );
}
