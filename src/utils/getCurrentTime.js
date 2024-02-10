const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function getCurrentTime() {
  const date = new Date();
  const month = months[date.getMonth()];
  const day = date.getDay();
  const year = date.getFullYear();
  const hour = date.getHours();
  const mins = date.getMinutes();

  return `${month} ${day < 10 && '0'}${day}, ${year} ${
    hour % 12 === 0 ? 12 : hour % 12
  }:${mins} ${hour === 24 ? 'AM' : hour >= 12 ? 'PM' : 'AM'}`;
}

export default getCurrentTime;
