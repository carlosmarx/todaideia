import ItemGallery from "./ItemGallery";

function Gallery1(child) {
    return (
        <>
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <ItemGallery img="/images/caderneta/demos/1.png" />
                    <ItemGallery img="/images/caderneta/demos/2.png" />
                    <ItemGallery img="/images/caderneta/demos/3.png" />
                    <ItemGallery img="/images/caderneta/demos/4.png" />
                    <ItemGallery img="/images/caderneta/demos/5.png" />
                    <ItemGallery img="/images/caderneta/demos/6.png" />
                    <ItemGallery img="/images/caderneta/demos/7.png" />
                    <ItemGallery img="/images/caderneta/demos/8.png" />
                    <ItemGallery img="/images/caderneta/demos/9.png" />
                    <ItemGallery img="/images/caderneta/demos/10.png" />
                </div>
            </div>
        </>
    )
}

export default Gallery1;