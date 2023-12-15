const fetch = require('node-fetch')

module.exports = {
  getGists: async (headers, callback) => {
    // @ts-ignore
    return await fetch('https://api.github.com/gists', {
      method: 'GET',
      headers,
    })
      .then((res) => res.json())
      .then((res) => {
        callback(res)
      })
  },
  runUpdate: async (/** @type {String} */ id, headers, body, callback) => {
    // @ts-ignore
    return await fetch('https://api.github.com/gists/' + id, {
      method: 'PATCH',
      headers,
      body,
    })
      .then((res) => res.json())
      .then((res) => {
        callback(res)
      })
  },
  runCreate: async (headers, body, callback) => {
    // @ts-ignore
    return await fetch('https://api.github.com/gists', {
      method: 'POST',
      headers,
      body,
    })
      .then((res) => res.json())
      .then((res) => {
        callback(res)
      })
  },
}