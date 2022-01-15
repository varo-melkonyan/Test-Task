const elements = {
    img: (data, categories) => {
        for(let j = 0; j < categories.length; j++) {
            let button = `
                <button id="${categories[j].id}" class="categories" value="${categories[j].name}" onclick="imgView()">${categories[j].name}</button>
                `
                $("body").append(button);
        }
        for (let i = 0; i < data.length; i++) {
            let img = `
                <img id="${data[i].id}" src="${data[i].url}" style="width: ${data[i].width}px height: ${data[i].height}px"></img>
                `
                $(`.breeds`).append(img);
        }
    }
}