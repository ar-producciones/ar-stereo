export function useTeam() {
  const getTeam = async () => {
    const { data } = await useFetch("/api/team");
    return data.value;
  };
  return { getTeam };
}
