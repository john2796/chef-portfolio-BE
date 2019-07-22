exports.seed = function(knex, Promise) {
  return knex("posts")
    .del()
    .then(function() {
      return knex("posts").insert([
        {
          chef_name: "Erica",
          recipe_title: "Pizza",
          item_photo:
            "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          chef_location: "Boston, Massachusetts",
          item_ingredients: "Pizza Dough, Pizza Sauce, Cheese, Basil",
          user_id: 1
        },
        {
          chef_name: "Mitsuki",
          recipe_title: "Soup",
          item_photo:
            "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
          chef_location: "Austin, TX",
          item_ingredients: "Water, Tomatoes, Cream, Basil",
          user_id: 2
        },
        {
          chef_name: "Sam",
          recipe_title: "Steak",
          item_photo:
            "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          chef_location: "Colonie, NY",
          item_ingredients: "Cut of Steak",
          user_id: 3
        },
        {
          chef_name: "Johnny",
          recipe_title: "Fried Chicken Bao Bun",
          item_photo:
            "https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/chicken-bao-hk.jpg?itok=OMCVzOHm",
          chef_location: "Chicago, IL",
          item_ingredients: "",
          user_id: 1
        },
        {
          chef_name: "Johnny",
          recipe_title: "Smoked Salmon Rice Cracker",
          item_photo:
            "https://static1.squarespace.com/static/58f510ee20099e782fd87047/t/58f99960cd0f686256f35ee9/1492752752021/",
          chef_location: "Chicago, IL",
          item_ingredients: "",
          user_id: 1
        },
        {
          chef_name: "Seth",
          recipe_title: 'Philly\'s "Famous" Cheesesteak',
          item_photo:
            "https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Pat-s-King-of-Steaks-Philly-Cheese-Steak_exps150749_CW2376963B12_20_7bC_RMS.jpg",
          chef_location: "Philadelphia, PA",
          item_ingredients: "",
          user_id: 1
        },
        {
          chef_name: "Rachel",
          recipe_title: "Dijon Hollander Mussels",
          item_photo:
            "https://scontent.cdninstagram.com/vp/5413ae6319d966f3543853ff815ec376/5D9DB037/t51.2885-15/e35/s480x480/60381496_302781353944004_8600010818992864285_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com",
          chef_location: "Newport, RI",
          item_ingredients: "",
          user_id: 1
        },
        {
          chef_name: "Michelle",
          recipe_title: "Creamy Lobster Bisque",
          item_photo:
            "https://keviniscooking.com/wp-content/uploads/2018/02/How-to-Make-Creamy-Lobster-Bisque-square-480x270.jpg",
          chef_location: "Baltimore, MD",
          item_ingredients: "",
          user_id: 1
        },
        {
          chef_name: "Mr. 1",
          recipe_title: "Steak",
          item_photo:
            "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          chef_location: "Colonie, NY",
          item_ingredients: "Cut of Steak",
          user_id: 1
        },
        {
          chef_name: "Daniel",
          recipe_title: "Spicy Thai Peanut Sauce over rice",
          item_photo:
            "https://cookieandkate.com/images/2018/10/spicy-thai-peanut-sauce-over-roasted-sweet-potatoes-and-rice-3-550x822.jpg",
          chef_location: "Tuscan, AZ",
          item_ingredients: "Rice, Sauce",
          user_id: 1
        },
        {
          chef_name: "Joe",
          recipe_title: "Burger",
          item_photo:
            "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/26/09/mcdonalds-bigvegants.jpg",
          chef_location: "USA",
          item_ingredients: "Ground beef",
          user_id: 1
        },
        {
          chef_name: "Jack",
          recipe_title: "Pizza",
          item_photo:
            "https://www.gannett-cdn.com/-mm-/d45a1bc902cb3f4367b332e27f859c7252d4b7fa/c=0-109-2119-1306/local/-/media/2019/04/12/USATODAY/USATODAY/636906715367623091-GettyImages-1054857274.jpg?width=3200&height=1680&fit=crop",
          chef_location: "San Francisco, CA",
          item_ingredients: "Cheese, Dough, Pepperoni, Sauce",
          user_id: 1
        },
        {
          chef_name: "Seagull",
          recipe_title: "Fish",
          item_photo:
            "https://vignette.wikia.nocookie.net/disneyvillains/images/8/8d/Nemo-seagulls.jpg/revision/latest?cb=20100410000140",
          chef_location: "Beach",
          item_ingredients: "Fish",
          user_id: 1
        },
        {
          chef_name: "Daniel",
          recipe_title: "Vegan Buddah Bowl",
          item_photo:
            "http://wellandfull.com/wp-content/uploads/2016/02/WellandFull-4-21.jpg",
          chef_location: "Tucson, AZ",
          item_ingredients: "Quiona, Avocado, Peas, Greens, Siricha",
          user_id: 1
        },
        {
          chef_name: "Seth",
          recipe_title: "Maryland Crab Roll",
          item_photo:
            "https://cdn.vox-cdn.com/thumbor/dDE_5FcV7VV883-9EpPCjBGS7zg=/0x0:2000x1448/1200x675/filters:focal(840x564:1160x884)/cdn.vox-cdn.com/uploads/chorus_image/image/63278714/Crab_roll_horizontal.0.jpg",
          chef_location: "Philadelphia, PA",
          item_ingredients: "",
          user_id: 1
        },
        {
          chef_name: "Daniel",
          recipe_title: "The Best Vegan Enchiladas",
          item_photo:
            "https://www.gimmesomeoven.com/wp-content/uploads/2016/04/Vegan-Enchiladas-Recipe-4.jpg",
          chef_location: "Tucson, AZ",
          item_ingredients:
            "oil, onion, garlic, tomato sauce, chipotle pepper, salt, pepper, refried beans, corn tortillas, cilantro",
          user_id: 1
        },
        {
          chef_name: "Seth ",
          recipe_title: "Filet Mignon Katsu Sando",
          item_photo:
            "https://www.chowhound.com/blog-media/2019/05/wagyu-kobe-katsu-sando-recipe-chowhound.jpg",
          chef_location: "Philadelphia, PA",
          item_ingredients: "",
          user_id: 1
        },
        {
          chef_name: "Seth",
          recipe_title: "Pork Al Pastor Taco",
          item_photo:
            "https://keviniscooking.com/wp-content/uploads/2017/04/Authentic-Tacos-Al-Pastor6-2.jpg",
          chef_location: "Philadelphia, PA",
          item_ingredients: "",
          user_id: 1
        },
        {
          chef_name: "Seth",
          recipe_title: "Crispy Tofu",
          item_photo:
            "https://theliveinkitchen.com/wp-content/uploads/2018/09/The-Best-Crispy-Tofu-The-Live-In-Kitchen-Facebook-500x500.jpg",
          chef_location: "Philadelphia, PA",
          item_ingredients: "",
          user_id: 1
        },
        {
          chef_name: "Seth",
          recipe_title: "Lamb Merguez",
          item_photo:
            "https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/200811-r-xl-merguez-spiced-lamb-shanks-with-chickpeas.jpg?itok=bb5omTOR",
          chef_location: "Philadelphia, PA",
          item_ingredients: "",
          user_id: 1
        }
      ])
    })
}
