class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.Collection = collection;
        this.ItemsPerPage = itemsPerPage;
        this.pages = Math.ceil(this.Collection.length / this.ItemsPerPage);
    }
    itemCount() {
        console.log(this.Collection.length);
    }
    pageCount() {
        console.log(this.pages);
    }
    pageItemCount(pageIndex) {
        if (pageIndex > this.pages - 1 || pageIndex < 0) console.log(-1);
        else if (pageIndex < this.pages - 1) console.log(this.ItemsPerPage);
        else {
            let lastPage = this.Collection.slice(this.ItemsPerPage * (this.pages - 1));
            console.log(lastPage.length);
        }
    }
    pageIndex(itemIndex) {
        if (itemIndex > this.Collection.length - 1 || itemIndex < 0) console.log(-1);
        else console.log(Math.floor(itemIndex / this.ItemsPerPage));
    }
}