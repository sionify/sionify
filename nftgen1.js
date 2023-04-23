const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

// Set the canvas width and height
canvas.width = 800;
canvas.height = 800;

// Generate a random number for the collection
const collectionNumber = Math.floor(Math.random() * 10) + 1;

// Draw a random number of shapes on the canvas
const numShapes = Math.floor(Math.random() * 10) + 1;
for (let i = 0; i < numShapes; i++) {
  // Generate a random shape and color
  const shape = Math.floor(Math.random() * 3) + 1;
  const color = '#' + Math.floor(Math.random() * 16777215).toString(16);

  // Generate random coordinates and dimensions for the shape
  const x = Math.floor(Math.random() * canvas.width);
  const y = Math.floor(Math.random() * canvas.height);
  const width = Math.floor(Math.random() * canvas.width/2);
  const height = Math.floor(Math.random() * canvas.height/2);

  // Draw the shape on the canvas
  switch (shape) {
    case 1:
      // Draw a rectangle
      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
      break;
    case 2:
      // Draw a circle
      ctx.beginPath();
      ctx.arc(x, y, width/2, 0, 2 * Math.PI);
      ctx.fillStyle = color;
      ctx.fill();
      break;
    case 3:
      // Draw a triangle
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + width, y);
      ctx.lineTo(x + width/2, y + height);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
      break;
  }
}

// Set the NFT name to the collection number
const nftName = `Collection ${collectionNumber}`;

// Log the NFT name to the console
console.log(nftName);
