import ItemGallery from "./ItemGallery";

function Gallery2(child) {
    return (
        <>
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <ItemGallery img="/images/caderneta/demos/11.png" />
                    <ItemGallery img="/images/caderneta/demos/12.png" />
                    <ItemGallery img="/images/caderneta/demos/13.png" />
                    <ItemGallery img="/images/caderneta/demos/14.png" />
                    <ItemGallery img="/images/caderneta/demos/15.png" />
                    <ItemGallery img="/images/caderneta/demos/16.png" />
                    <ItemGallery img="/images/caderneta/demos/17.png" />
                    <ItemGallery img="/images/caderneta/demos/18.png" />
                    <ItemGallery img="/images/caderneta/demos/19.png" />
                    <ItemGallery img="/images/caderneta/demos/20.png" />
                </div>
            </div>
        </>
    )
}

export default Gallery2;