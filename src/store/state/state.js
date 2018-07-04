export default {
  userinfo: JSON.parse(window.localStorage.getItem('USERINFO')) || {},
  key: window.localStorage.getItem('USERINFO_KEY') || '',
}
