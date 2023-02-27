const ImageCard = ({ image }) => {
    return (
        <div>
            <img className="w-full rounded shadow-sm" src={image} alt="images" />
        </div>
    )
}

export default ImageCard
