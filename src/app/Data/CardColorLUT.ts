export const assignCardColor = (i: number) => {
  if (i % 3 === 0) {
    return "bg-slate-700";
  }
  const adjustedIndex = i - Math.floor(i / 3);
  const v = (adjustedIndex % 5) as keyof typeof CardColorTable;
  return CardColorTable[v];
};

/* export const assignHoverColor = (colorClass: string) => {
  return `hover:${colorClass.replace(/-700$/, "-800")}`;
}; */

export const assignHoverColor = (colorClass: string) => {
  const updatedColorClass = colorClass.replace(/-(\d{3})$/, (_, p1) => {
    const newColorValue = parseInt(p1) + 100;
    return `-${newColorValue}`;
  });
  return `hover:${updatedColorClass}`;
};

export const CardColorTable = {
  0: "bg-pink-700",
  1: "bg-red-700",
  2: "bg-blue-700",
  3: "bg-green-700",
  4: "bg-yellow-700",
};
