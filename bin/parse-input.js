const commentsDelimiter = ['//', '#'];

export function parseInput(content = '') {
  return content
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean) // Ignore empty lines
    .filter(line => {
      // Ignore lines starting with a comment delimiter
      if (commentsDelimiter.some(block => line.startsWith(block))) {
        return false;
      }

      return true;
    });
}
