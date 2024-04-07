export async function getAuthorRepos(username) {
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `token ${process.env.ISSUE_ACCESS_TOKEN}`);
  myHeaders.append('X-GitHub-Api-Version', '2022-11-28');
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };
  try {
    //send GET request to fetch issues assigned to the authenticated users
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`,
      requestOptions
    );
    //debug network request
    if (!response.ok) {
      console.error('Error response:', response);
      throw new Error(
        `Failed to get author repo: ${response.status}/${response.statusText}`
      );
    }
    //parse response
    const data = await response.json();
    //return the fetched data
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
}

export async function getRepoIssues(username, reponame) {
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `token ${process.env.ISSUE_ACCESS_TOKEN}`);
  myHeaders.append('X-GitHub-Api-Version', '2022-11-28');
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  try {
    const response = await fetch(
      `https://api.github.com/repos/${username}/${reponame}/issues`,
      requestOptions
    );
    //debug network request
    if (!response.ok) {
      console.error('Error response:', response);
      throw new Error(`Failed to create issue: ${response.statusText}`);
    }

    //parse response
    const data = await response.json();
    //return the fetched data
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
}

export async function getIssueContent(username, reponame, number) {
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `token ${process.env.ISSUE_ACCESS_TOKEN}`);
  myHeaders.append('X-GitHub-Api-Version', '2022-11-28');
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };
  try {
    const response = await fetch(
      `https://api.github.com/repos/${username}/${reponame}/issues/${number}`,
      requestOptions
    );
    //debug network request
    if (!response.ok) {
      console.error('Error response:', response);
      throw new Error(`Failed to create issue: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
}
