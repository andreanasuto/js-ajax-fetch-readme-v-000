const token = 'aa1abb495486b14fbcb8b42178b44b5a62091d1d'
fetch('https://api.github.com/user/repos', {
  headers: {
    'Authorization': `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json)).done()
