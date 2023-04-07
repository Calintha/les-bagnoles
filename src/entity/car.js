class Car {
    constructor(data) {
        const TODAY = new Date();
        this.id = data.id;
        this.name = data.name;
        this.slug = data.slug;
        this.description = data.description;
        this.price = data.price;
        this.image = data.image;
        this.categories = data.categories ?? [];
        this.image_galery = data.image_galery ?? [];
        this.created_at = data.created_at ?? TODAY;
        this.updated_at = data.updated_at ?? TODAY;
        this.deleted_at = data.deleted_at ?? null;
    }
}

export { Car };