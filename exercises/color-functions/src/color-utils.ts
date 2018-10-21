//TODO: Implement hexToRgb
const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
  if (hex.length === 3) {
    const [hr, hg, hb] = hex.split('');
    return hexToRgb(`${hr}${hr}${hg}${hg}${hb}${hb}`);
  }

  const [r, g, b] = Array.from({ length: 3 })
    .map((_, idx) => hex.substring(idx * 2, idx * 2 + 2))
    .map(hex => parseInt(hex, 16));
  return { r, g, b };

  // const rgb = hexArr.reduce((acc, hex, i) => {
  //   const key = i === 0 ? 'r' : i === 1 ? 'g' : 'b';
  //   return {
  //     ...acc,
  //     [key]: parseInt(hex, 16)
  //   };
  // }, {r:0,g:0,b:0});
  // return rgb;
};

//TODO: Implement rgbToHex
const rgbToHex = (r: number, g: number, b: number): string => {
  return [r, g, b]
    .map(num => Math.max(0, Math.min(255, num)).toString(16))
    .map(hex => (hex.length === 1 ? `0${hex}` : hex))
    .join('');
};

export { hexToRgb, rgbToHex };
