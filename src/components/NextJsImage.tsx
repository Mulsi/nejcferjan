import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";

export default function NextJsImage({
    photo,
    imageProps: { alt, title, sizes, className, onClick },
    wrapperStyle,
}: RenderPhotoProps) {
    return (
        <div style={{ ...wrapperStyle, position: "relative" }}>
            <Image
                src={photo}
                placeholder="blur"
                blurDataURL="https://fakeimg.pl/600x600?text=.&font=bebas"
                {...{ alt, title, sizes, className, onClick }}
            />
        </div>
    );
}
