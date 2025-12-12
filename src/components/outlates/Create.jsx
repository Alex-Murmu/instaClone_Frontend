import React, { useState, useEffect } from 'react' // Import useEffect for cleanup
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog'
import { Avatar , AvatarFallback } from '@/components/ui/avatar'
import { CloudUpload, PlusSquare, Image as ImageIcon } from 'lucide-react' // Added ImageIcon

export default function Create() {
    const [selectedFile, setSelectedFile] = useState(null)
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null)

    // Recommended: Use useEffect to revoke the blob URL for memory cleanup
    useEffect(() => {
        return () => {
            if (imagePreviewUrl) {
                URL.revokeObjectURL(imagePreviewUrl)
            }
        }
    }, [imagePreviewUrl])

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        
        // Clear previous URL before creating a new one
        if (imagePreviewUrl) {
            URL.revokeObjectURL(imagePreviewUrl)
        }
        
        if (file) {
            setSelectedFile(file)
            const url = URL.createObjectURL(file)
            setImagePreviewUrl(url)
        } else {
            setSelectedFile(null)
            setImagePreviewUrl(null)
        }
    }

    return (
        <div className='cursor-pointer p-3 hover:bg-neutral-100 rounded-lg'>
            <Dialog>
                <DialogTrigger>
                    <div className='cursor-pointer flex gap-4 items-center '>
                        <div><PlusSquare /></div>
                    </div>
                </DialogTrigger>
                {/* 1. Ensure DialogContent has enough space (e.g., h-[450px]) */}
                <DialogContent className="h-[450px] flex flex-col">
                    
                    {/* Header: Takes its natural height (shrink) */}
                    <div className='flex items-center h-fit gap-5 pb-4 border-b'>
                        <Avatar>
                            <AvatarFallback><CloudUpload /></AvatarFallback>
                        </Avatar>
                        <div>
                            <p className='font-semibold text-sm '>Upload Files</p>
                            <p className='text-xs text-neutral-400'>Select and upload files of Your choice</p>
                        </div>
                    </div>
                    
                    {/* 2. **CRITICAL CHANGE:** Main Content Area (uses flex-grow to take up all remaining space) */}
                    <div className='flex-grow flex flex-col items-center p-2'>
                        
                        {/* Preview Area: Use flex-grow and full dimensions */}
                        <div className='w-full flex-grow flex items-center justify-center p-4 border border-dashed rounded-lg mb-4'>
                            {imagePreviewUrl ? (
                                // This div now correctly scales to the parent's available space
                                <div className="w-full h-full overflow-hidden flex items-center justify-center"> 
                                    <img 
                                        src={imagePreviewUrl} 
                                        alt="Image Preview" 
                                        // Image itself fits within the container
                                        className="object-contain max-h-full max-w-full rounded-md shadow-md"
                                    />
                                </div>
                            ) : (
                                // Placeholder
                                <div className='flex flex-col items-center text-neutral-500'>
                                    <ImageIcon size={48} className='mb-2'/>
                                    <p>Select an image to see the preview.</p>
                                </div>
                            )}
                        </div>
                        
                        {/* File Input Label/Button: Takes its natural height (shrink) */}
                        <label htmlFor="image-upload" className='w-full'>
                            <input 
                                type="file" 
                                id="image-upload" 
                                name="image-upload" 
                                accept="image/*" 
                                className='hidden'
                                onChange={handleFileChange}
                            />
                            <div className='border rounded-md p-2 text-center text-sm font-medium bg-neutral-100 cursor-pointer hover:bg-neutral-200 transition-colors'>
                                Choose Image
                            </div>
                        </label>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}