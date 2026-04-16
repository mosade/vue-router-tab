let activeTabsInstance = null

export function getActiveTabsInstance() {
  return activeTabsInstance
}

export function setActiveTabsInstance(instance) {
  activeTabsInstance = instance || null
}
