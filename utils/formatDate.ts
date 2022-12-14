export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString(undefined, { month: "long", year: "numeric" });
};
