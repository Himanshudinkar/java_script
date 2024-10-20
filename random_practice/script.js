function imagegenrater() {
    // setInterval(run,2000);
    // function run() {
  let arr = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/amazing-stone-path-in-forest-free-image.jpg?w=600&quality=80",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
    "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80",
    "https://th.bing.com/th/id/OIG2.9O4YqGf98tiYzjKDvg7L",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4dtsUW5HDjgqlUt5QX0x7AjIqxVcMaCcQ&s",
    "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg",
    "https://www.adobe.com/in/products/firefly/features/media_1cc035824a5dbf414f18a55ef622e86cc51684dd5.png?width=750&format=png&optimize=medium",
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouette-of-a-guy-with-a-cap-at-red-sky-sunset-free-image.jpeg?h=800&quality=80",
  ];

  let random = Math.random();

  let ans = random * arr.length;

  let afterfloor = Math.floor(ans);

  let arroutput = arr[afterfloor];

  let output = document.querySelector("#image");
  output.innerHTML = `<img src = "${arroutput}" alt ="image not found" style="height: 400px; width: 300px; border: 1px solid black; border-radius: 10px;">`;
}
// }