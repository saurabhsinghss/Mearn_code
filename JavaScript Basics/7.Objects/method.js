let product = {
  company: "Nike",
  itemName: "Running shoe",
  price: 2500,
  rating: {
    fiveStar: 4,
    fourStar: 5,
    threeStar: 8,
    twoStar: 12,
    oneStar: 2,
    showRating: function () {
      let totalRating =
        this.fiveStar +
        this.fourStar +
        this.threeStar +
        this.twoStar +
        this.oneStar;
      let avgRating =
        (5 * this.fiveStar +
          4 * this.fourStar +
          3 * this.threeStar +
          2 * this.twoStar +
          1 * this.oneStar) /
        totalRating;

      console.log("Total Ratings:", totalRating);
      console.log("Average Rating:", avgRating);
    },
  },
  // avgRating: 4.5,
  // numberOfRating:45,
};

// function showRating(rating) {
//   let totalRating =
//     rating.fiveStar +
//     rating.fourStar +
//     rating.threeStar +
//     rating.twoStar +
//     rating.oneStar;
//   let avgRating =
//     (5 * rating.fiveStar +
//       4 * rating.fourStar +
//       3 * rating.threeStar +
//       2 * rating.twoStar +
//       1 * rating.oneStar) /
//     totalRating;

//   console.log("Total Ratings:", totalRating);
//   console.log("Average Rating:", avgRating);
// }

// console.log(showRating(product.rating));
product.rating.showRating();