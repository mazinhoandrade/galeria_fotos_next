import { Photo } from "@/types/Photo";

type Props = {
  selectedPhoto: Photo;
  closeModal: () => void;
};

export const Modal = ({ selectedPhoto, closeModal }: Props) => {
  return (
    <>
      <div className="fixed cursor-pointer top-10 right-10 z-50"><p className="text-5xl bg-blue-500  w-14 h-14 rounded-full text-white text-center font-bold" onClick={closeModal}>X</p></div>
      <div onClick={closeModal} className="fixed left-0 top-0 right-0 bottom-0 z-40 flex justify-center items-center bg-black bg-opacity-90">
        <div className="max-w-5xl">
        <img
          className="max-w-screen max-h-screen"
          src={`/assets/${selectedPhoto.url}`}
        />
        </div>
      </div>
    </>
  );
};
