export function usePartners() {
  async function getPartners() {
    const partners = await $fetch('/api/partners')
    return partners
  }

  return { getPartners }
}
