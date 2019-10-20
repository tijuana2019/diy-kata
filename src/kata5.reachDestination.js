const reachDestination = (distance, speed) => {
  const time = distance / speed;
  return `Your estimated arrival time is ${Math.ceil(time)} hours`;
};

module.exports = reachDestination;
