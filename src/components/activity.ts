export default function activity() {
  let activity: any;
  fetch("https://api.github.com/users/Seven730/events").then(
    (response) => (activity = response.json())
  );
  console.log(activity);
  return activity;
}
