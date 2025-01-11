import { Photo } from "@/types/Photo"

type Props = {
    photo: Photo
    onClick: () => void
}

export const PhotoItem = ({ photo, onClick }:Props  ) => {
    return (
        <div
            key={photo.id}
            className="px-4 w-full h-full  overflow-hidden shadow-lg cursor-pointer hover:opacity-75"
        >
            <img 
                onClick={onClick}    
                className="w-full h-full object-cover rounded-lg"
                src={`/assets/${photo.url}`}
            />
        </div>
    )
}