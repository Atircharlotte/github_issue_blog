'use server';
import { redirect } from 'next/navigation';

export async function createPost(prevState, formData) {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('X-GitHub-Api-Version', '2022-11-28');
  myHeaders.append('Authorization', `token ${process.env.ISSUE_ACCESS_TOKEN}`);

  const raw = JSON.stringify({
    title: formData.get('title'),
    body: formData.get('content'),
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };
  try {
    const response = await fetch(
      `https://api.github.com/repos/${prevState.accountName}/${prevState.reponame}/issues`,
      requestOptions
    );

    /*
    //parse response
    const data = await response.json();
    //return fetched data

    return data;
    */
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }

  redirect(`/${prevState.reponame}`);
}

export async function editPost(prevState, formData) {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('X-GitHub-Api-Version', '2022-11-28');
  myHeaders.append('Authorization', `token ${process.env.ISSUE_ACCESS_TOKEN}`);

  const raw = JSON.stringify({
    title: formData.get('title'),
    body: formData.get('content'),
  });

  const requestOptions = {
    method: 'PATCH',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };
  try {
    console.log(
      `https://api.github.com/repos/${prevState.accountName}/${prevState.reponame}/issues/${prevState.number}`
    );
    const response = await fetch(
      `https://api.github.com/repos/${prevState.accountName}/${prevState.reponame}/issues/${prevState.number}`,
      requestOptions
    );
  } catch (error) {
    throw new Error(`Fail to fetch data: ${error.message}`);
  }

  redirect(`/${prevState.reponame}`);
}

export async function deletePost(prevState, formData) {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('X-GitHub-Api-Version', '2022-11-28');
  myHeaders.append('Authorization', `token ${process.env.ISSUE_ACCESS_TOKEN}`);

  const raw = JSON.stringify({
    state: 'closed',
  });

  const requestOptions = {
    method: 'PATCH',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };
  try {
    const response = await fetch(
      `https://api.github.com/repos/${prevState.accountName}/${prevState.reponame}/issues/${prevState.number}`,
      requestOptions
    );
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }

  redirect(`/${prevState.reponame}`);
}
