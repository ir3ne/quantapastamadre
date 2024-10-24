export const closeInfo = () => {
  const info = document.getElementById('info');
  info.style.display = 'none';
}

export const blockInvalidChar = e => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();
