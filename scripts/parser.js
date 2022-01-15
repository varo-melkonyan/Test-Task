const parser = {
    getParams: () => {
        let  url  = new URL(document.location.href);
        let page  = url.searchParams.get("page");
        let categories = url.searchParams.get("categories");

        return `data/${page}/${categories}.json`;
    }
}