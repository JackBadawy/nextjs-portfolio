export const assignCardColor = (i: number) => {
  if (i % 3 === 0) {
    return "bg-slate-500";
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

export const darkenColor = (colorClass: string) => {
  return colorClass.replace(/-(\d{3})$/, (_, p1) => {
    const newColorValue = parseInt(p1) + 300;
    return `-${newColorValue}`;
  });
};

export const CardColorTable = {
  0: "bg-pink-500",
  1: "bg-red-500",
  2: "bg-blue-500",
  3: "bg-green-500",
  4: "bg-yellow-500",
};
