
export default function getRest(uri, t) {
  let token = t || 'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6InNha2FyaS5ydW9ob0BmMTAwMC5jb20iLCJ1c2VySWQiOjQ5OTk5OTc3MTA5NzU2NjcwMywiaWF0IjoxNDcxMzQyNTUzfQ.glqzz90efCkvevhl-h-Eggr_75WeNrJ5jrD7c4reCHe1jZhC3XWufiTO0egaO3si0Fkv-1L1tTPRoXQARXZXDw';
  console.log('uri', 'http://dev1r3.f1000internal.com' + uri);
  return fetch('http://localhost' + uri, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
}
