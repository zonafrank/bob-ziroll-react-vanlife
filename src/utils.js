export function isLoggedIn() {
  const loggedInStr = localStorage.getItem("loggedIn");
  return loggedInStr ? true : false;
}
