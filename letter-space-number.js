function letterSpaceNumber(str) {
    const regex = /[a-zA-Z] \d(?![a-zA-Z0-9])/g;
    const matches = str.match(regex);
    return matches || [];
}