let data = {};
let currentCategories;
let path;

$(async () => {
    path = parser.getParams();
    await $.get(path, async function (json) {
        data.breeds = json.breeds;
    });
    await $.get("data/categories/categories.json", async function (json) {
        data.categories = json.categories;
    });

    elements.img(data.breeds, data.categories);
})



function imgView() {
    $(".categories").click(function() {
        currentCategories = this.value;
        window.location = `index.html?page=1&categories=${currentCategories}`;
    });   
}
