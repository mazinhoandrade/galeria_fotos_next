"use client"

import { Footer } from "@/components/Footer"
import { Modal } from "@/components/Modal"
import { PhotoItem } from "@/components/PhotoItem"
import { photosList } from "@/data/photosList"
import { Photo } from "@/types/Photo"
import { useState } from "react"

export default function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false) // State to track modal open
  
  const openModal = (id: number) => {
    
    let photo = photosList.find((photo) => photo.id === id)
    if (!photo) return
    setSelectedPhoto(photo as Photo)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  } 

      
  return (
    <div className=''>
      <h1 className="text-3xl text-center text-white my-10">Fotos Intergalacticas</h1>
      <section className="container max-w-5xl mx-auto text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {photosList.map((photo) => (
            <div key={photo.id}>
               <PhotoItem photo={photo} onClick={() => openModal(photo.id)} />
            </div>
         ))}
      </section>
      {isModalOpen && selectedPhoto && 
        <Modal selectedPhoto={selectedPhoto} closeModal={closeModal} />
      }
      <Footer />
    </div>

  )
}
