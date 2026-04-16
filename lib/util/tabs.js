let currentTabs = null

const alivePages = Object.create(null)

export function setCurrentTabs($tabs) {
  currentTabs = $tabs || null
}

export function getCurrentTabs() {
  return currentTabs
}

export function clearCurrentTabs($tabs) {
  if (currentTabs === $tabs) {
    currentTabs = null
  }
}

export function setAlivePage(key, vm) {
  if (key && vm) {
    alivePages[key] = vm
  }
}

export function getAlivePage(key) {
  return key ? alivePages[key] || null : null
}

export function clearAlivePage(key, vm) {
  if (!key) return

  if (!vm || alivePages[key] === vm) {
    delete alivePages[key]
  }
}
