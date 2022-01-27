import React, { useState } from "react"

const Photos: React.FC<any> = (data) => {

    const photos = data.data

    const [selectedPhoto, setSelectedPhoto] = useState(photos.items[0])

    return (
        <div className="photos">
            <figure className="gallery-image">
                <img src={`${selectedPhoto.url}?${selectedPhoto?.renditions?.items[0]?.query}`} alt={selectedPhoto.description} />
                <figcaption>
                    <span className="image-caption">{selectedPhoto.description}</span>
                    <div className="gallery-links">
                        <a
                        className="gallery-fullsize-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={selectedPhoto.url}
                        >
                        open full size
                        </a>
                    </div>
                </figcaption>
            </figure>
            <div className="gallery-options">
                <h2 className="gallery-heading">
                You can use any of these photos with credit:
                </h2>
                <ul className="gallery-thumbnails">
                    {photos.items.map((photo: any) => (
                        <li key={photo.url} className="gallery-thumb">
                            <button
                                className="gallery-thumb-link"
                                data-sound-hover="pop"
                                data-sound-focus="pop"
                                data-sound-click="click"
                                onClick={() => setSelectedPhoto(photo)}
                                >
                                <img
                                    src={`${photo.url}?${photo?.renditions?.items[0]?.query}`}
                                    alt={photo.description}
                                />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>)
}

export default Photos