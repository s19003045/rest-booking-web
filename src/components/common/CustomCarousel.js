import React, { useState, useEffect } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { v4 as uuidv4 } from "uuid";
import "./CustomCarousel.css";

const CustomCarousel = ({ carouselImgUrls, thumbImgUrls }) => {
    const [value, setValue] = useState(0);
    const [thumbnails, setThumbnails] = useState(null);

    const onChange = (value) => {
        setValue(value);
    };

    useEffect(() => {
        if (!Array.isArray(thumbImgUrls)) return null;
        const _thumbnails = [];
        thumbImgUrls.forEach((imgUrl) => {
            _thumbnails.push(
                <img
                    key={uuidv4()}
                    className="img-example-small"
                    src={imgUrl}
                />
            );
        });
        setThumbnails(_thumbnails);
    }, [thumbImgUrls]);

    return (
        <div>
            {Array.isArray(carouselImgUrls) && carouselImgUrls.length > 0 && (
                <React.Fragment>
                    <Carousel
                        value={value}
                        onChange={onChange}
                        plugins={["arrows"]}
                    >
                        {Array.isArray(carouselImgUrls) &&
                            carouselImgUrls.map((url) => (
                                <img key={uuidv4()} src={url} />
                            ))}
                    </Carousel>
                    {Array.isArray(thumbnails) && thumbnails.length > 0 && (
                        <Dots
                            value={value}
                            onChange={onChange}
                            thumbnails={thumbnails}
                        />
                    )}
                </React.Fragment>
            )}
        </div>
    );
};

export default CustomCarousel;
