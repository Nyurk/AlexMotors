import React from 'react';
import ImageGallery from 'react-image-gallery';

const Gallery = (props) => {
    const {galleryId} = props;

    const elem = document.getElementById(props.galleryId);
    console.log(elem);
    const slides = [...elem.querySelectorAll('.slide')];
    console.log(slides);
    const items = slides.map((slide, slideIndex) => {
        return {
            renderItem: () => {
                return (
                    <div ref={(div) => {
                        if (!div) return;
                        div.append(slide);
                    }}></div>
                )
            }
        }
    })

    return <ImageGallery items={items} />

};

export default Gallery;
