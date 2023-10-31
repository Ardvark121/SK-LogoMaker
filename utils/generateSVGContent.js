function getshape(shape, shapecolor) {
  if (shape == "circle") {
    return `<circle cx="150" cy="100" r="90" fill="${shapecolor}" />`;
  } else if (shape == "triangle") {
    return `<polygon points="47,190 150,10 253,190" fill="${shapecolor}" />`;
  } else if (shape == "square") {
    return `<rect x="60" y="10" width="180" height="180" fill="${shapecolor}" />`;
  }
}

async function generateSVGContent(data) {
  const shapesect = await getshape(data.shape, data.shapeColor);

  const finalform = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapesect}
    <text x="150" y="120" font-size="50" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
    </svg>`;
  return finalform;
}
module.exports = generateSVGContent;
