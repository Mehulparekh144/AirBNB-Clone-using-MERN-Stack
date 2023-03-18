import axios from 'axios'
import React, { useState } from 'react'

const PhotoUploader = ({ addedPhotos, onChange }) => {
    const [photoLink, setPhotoLink] = useState("")

    function uploadPhoto(e) {
        const files = e.target.files
        const data = new FormData();
        for (let index = 0; index < files.length; index++) {
            data.append('photos', files[index])

        }
        axios.post('/upload', data, {
            headers: { 'Content-type': 'multipart/form-data' }
        }).then(response => {
            const { data: filenames } = response
            onChange(prev => {
                return [...prev, ...filenames];
            })

        })
    }

    async function addPhotoByLink(e) {
        e.preventDefault()
        const { data: filename } = await axios.post('/upload-by-link', { link: photoLink })

        onChange(prev => {
            return [...prev, filename];
        })
        setPhotoLink('')
    }

    function removePhoto(event , filename) {
        onChange([...addedPhotos].filter(photo => photo !== filename));
        event.preventDefault();
    }

    function selectMainPhoto(event , filename){
        event.preventDefault();
        const newAddedPhotos = [filename , ...addedPhotos.filter(photo => photo !== filename)]
        onChange(newAddedPhotos)
    }

    return (
        <>
            <div className='flex gap-2  '>
                <input type="text" value={photoLink} onChange={e => setPhotoLink(e.target.value)} placeholder='Add using link /.jpg' />
                <button className='bg-gray-200 px-4 rounded-2xl text-sm' onClick={addPhotoByLink}>Add Photo</button>
            </div>
            <div className='grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-6 mt-4'>
                {addedPhotos.length > 0 && addedPhotos.map((link, index) => (
                    <div key={index} className='h-48 flex relative '>
                        <img className="rounded-xl w-full object-cover position-center" src={link} alt="" />
                        <button onClick={e => removePhoto(e,link)} className='cursor pointer absolute bottom-1 right-1 text-white bg-black bg-opacity-75 p-1 rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>

                        </button>
                        <button onClick={e => selectMainPhoto(e,link)} className='cursor pointer absolute bottom-1 left-1 text-white bg-black bg-opacity-75 p-1 rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill={link === addedPhotos[0]?"currentColor":" "} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            
                            



                        </button>
                    </div>
                ))}
                <label className='h-32 cursor-pointer flex items-center gap-3 justify-center  border  bg-gray-200 rounded-xl p-2 text-l text-gray-600'>
                    <input type={'file'} multiple className='hidden' onChange={uploadPhoto} />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                    Upload Photo</label>
            </div>
        </>


    )
}

export default PhotoUploader
