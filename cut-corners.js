function round(n) {
  if (n >= 0) {
    return trunc(n + 0.5);
  } else {
    return trunc(n - 0.5);
  }
}

function ceil(n) {
  const truncated = trunc(n);
  if (truncated === n) {
    return n;
  }
  return n > 0 ? truncated + 1 : truncated;
}

function floor(n) {
  const truncated = trunc(n);
  if (truncated === n) {
    return n;
  }
  return n > 0 ? truncated : truncated - 1;
}

function trunc(n) {
  if (n < 0) {
    return -trunc(-n);
  }
  if (n < 1) {
    return 0;
  }
  let power = 1;
  while (power * 2 <= n) {
    power = power * 2;
  }
  return power + trunc(n - power);
}

