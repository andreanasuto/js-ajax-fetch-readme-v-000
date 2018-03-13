const token = '481f526ebc96d311991ac55b1c0589df326c6f60'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json)).done()
