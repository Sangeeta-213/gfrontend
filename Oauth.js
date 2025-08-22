// OAuthCallback.js
useEffect(() => {
  const hash = window.location.hash;
  const token = new URLSearchParams(hash.replace('#', '?')).get('access_token');
  localStorage.setItem('access_token', token);
  // redirect to file manager page
}, []);
