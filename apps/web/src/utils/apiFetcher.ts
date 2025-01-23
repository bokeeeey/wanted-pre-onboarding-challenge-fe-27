export const apiFetcher = async (url: string, options: RequestInit) => {
  try {
    const response = await fetch(url, options)
    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.details || "API 호출 실패")
    }

    return result
  } catch (error) {
    console.error(error)
    throw error
  }
}
