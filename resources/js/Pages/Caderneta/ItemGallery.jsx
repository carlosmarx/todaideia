function ItemGallery(props) {
    return (
        <>
            <div className="flex w-1/2 lg:w-1/5 flex-wrap">
                <div className="w-full p-1 md:p-2">
                    <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={props.img} />
                </div>
            </div>
        </>
    )
}

export default ItemGallery;