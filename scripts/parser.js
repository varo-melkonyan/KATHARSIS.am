const parser = {
    getParams: () => {
        let  url  = new URL(document.location.href);
        console.log(url)
        let lan  = url.searchParams.get("lan");
        let id = url.searchParams.get("id");

        return `data/${lan}/${id}.json`;
    }
}