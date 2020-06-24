let dishes = new Set();
//add
dishes.add("mushroom Soup")
    .add("veg friedrice")
    .add("Gobi munchurian")
    .add("Veg friedrice");

//size
console.log(dishes.size);
//delete
dishes.delete("mushroom Soup")
//has
console.log(dishes.has("mushroom Soup"));
//forEach iteration
dishes.forEach(eachDish => {
    console.log(eachDish);
});