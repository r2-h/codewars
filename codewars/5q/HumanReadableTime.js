function humanReadable (seconds) {
  const sec = String(seconds % 60).padStart(2, '0')
  const minutes = String(Math.floor((seconds / 60) % 60 )).padStart(2, '0')
  const hours = String(Math.floor(seconds / 3600)).padStart(2, '0')
  return `${hours}:${minutes}:${sec}`
}
