let objarr =[
    {
        image : "https://capital-shop-multi-page.vercel.app/Images/m-towel-001-tallwalker-original-imaghct3zkjg68z4.webp",
        description : "mens fashion jeens",
        price : "Rs. 1599"
    },
    {
        image : "https://capital-shop-multi-page.vercel.app/Images/xl-nov-pink-nsw-gs-xl-gosriki-original-imagubadx7s3yktg.webp",
        description : "womens fashion suit",
        price : "Rs. 1599"
    },
     {
        image : "https://capital-shop-multi-page.vercel.app/Images/xl-nov-pink-nsw-gs-xl-gosriki-original-imagubadx7s3yktg.webp",
        description : "womens fashion suit",
        price : "Rs. 1599"
    },
     {
        image : "https://capital-shop-multi-page.vercel.app/Images/xl-nov-pink-nsw-gs-xl-gosriki-original-imagubadx7s3yktg.webp",
        description : "womens fashion suit",
        price : "Rs. 1599"
    },
     {
        image : "https://capital-shop-multi-page.vercel.app/Images/xl-nov-pink-nsw-gs-xl-gosriki-original-imagubadx7s3yktg.webp",
        description : "womens fashion suit",
        price : "Rs. 1599"
    },
     {
        image : "https://capital-shop-multi-page.vercel.app/Images/xl-nov-pink-nsw-gs-xl-gosriki-original-imagubadx7s3yktg.webp",
        description : "womens fashion suit",
        price : "Rs. 1599"
    },
     {
        image : "https://capital-shop-multi-page.vercel.app/Images/xl-nov-pink-nsw-gs-xl-gosriki-original-imagubadx7s3yktg.webp",
        description : "womens fashion suit",
        price : "Rs. 1599"
    },
     {
        image : "https://capital-shop-multi-page.vercel.app/Images/xl-nov-pink-nsw-gs-xl-gosriki-original-imagubadx7s3yktg.webp",
        description : "womens fashion suit",
        price : "Rs. 1599"
    },
     {
        image : "https://capital-shop-multi-page.vercel.app/Images/xl-nov-pink-nsw-gs-xl-gosriki-original-imagubadx7s3yktg.webp",
        description : "womens fashion suit",
        price : "Rs. 1599"
    },
      {
        image : "https://capital-shop-multi-page.vercel.app/Images/xl-nov-pink-nsw-gs-xl-gosriki-original-imagubadx7s3yktg.webp",
        description : "womens fashion suit",
        price : "Rs. 1599"
    },
      {
        image : "https://capital-shop-multi-page.vercel.app/Images/xl-nov-pink-nsw-gs-xl-gosriki-original-imagubadx7s3yktg.webp",
        description : "womens fashion suit",
        price : "Rs. 1599"
    },
      {
        image : "https://capital-shop-multi-page.vercel.app/Images/xl-nov-pink-nsw-gs-xl-gosriki-original-imagubadx7s3yktg.webp",
        description : "womens fashion suit",
        price : "Rs. 1599"
    },
      {
        image : "https://capital-shop-multi-page.vercel.app/Images/xl-nov-pink-nsw-gs-xl-gosriki-original-imagubadx7s3yktg.webp",
        description : "womens fashion suit",
        price : "Rs. 1599"
    },
      {
        image : "https://capital-shop-multi-page.vercel.app/Images/xl-nov-pink-nsw-gs-xl-gosriki-original-imagubadx7s3yktg.webp",
        description : "womens fashion suit",
        price : "Rs. 1599"
    },
      {
        image : "https://capital-shop-multi-page.vercel.app/Images/xl-nov-pink-nsw-gs-xl-gosriki-original-imagubadx7s3yktg.webp",
        description : "womens fashion suit",
        price : "Rs. 1599"
    },

];

let output = document.querySelector("#output");
output.innerHTML = objarr.map((e) =>`

     <div class="card">
        <img src="${e.image}" alt="not fount">
        <p>${e.description}</p>
        <pre>${e.price}</pre>
        <button>Add to card</button>
      </div>

`).join("");



