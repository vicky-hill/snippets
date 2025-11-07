export default function (string: string) {
  if (!string) return '';

  const withSpaces = string.replace(/([A-Z])/g, ' $1').trim();
  
  return withSpaces
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}