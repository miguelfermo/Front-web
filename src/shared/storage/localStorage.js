export function readStorage(key, fallbackValue) {
  try {
    const storedValue = localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : fallbackValue
  } catch {
    return fallbackValue
  }
}

export function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}
