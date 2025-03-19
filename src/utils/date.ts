export const formatTimestamp = (timestamp: number): string => {
  return new Date(timestamp).toLocaleDateString("en-US", { year: "numeric", month: "long" });
};
