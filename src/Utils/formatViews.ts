export function formatViews(views: number) {
  const formatter = new Intl.NumberFormat(undefined, { notation: "compact" });

  return formatter.format(views);
}
