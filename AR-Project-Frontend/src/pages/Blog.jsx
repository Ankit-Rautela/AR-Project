import { AlignJustify } from 'lucide-react'
import profilePic from '../assets/profile-pic.png'

const Blog = () => {
    const handleHome = () => {
        console.log("User clicked on <AlignJustify /> icon")
    }
    const createBlog = () => {
        console.log("User want to create blog")
    }
    return (
        <>
            {/* NaveBar */}
            <div className="grid gap-4 min-h-[100px] sm:grid-cols-12 shadow-xl sm:sticky top-0 bg-white">
                <div className="min-h-[100px] rounded bg-white flex items-center justify-center sm:col-span-2">
                    <AlignJustify className='mx-auto cursor-pointer' onClick={handleHome} />
                </div>
                <div className="min-h-[100px] rounded bg-white flex items-center justify-end sm:col-span-10">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full max-w-xs p-2 border border-gray-200 rounded-2xl mr-4"
                    />
                    <img className="w-16 h-16 m-4" src={profilePic} alt="logo" />
                </div>
            </div>

            <div className='grid gap-4 sm:grid-cols-12'>
                <div className='min-h-[100px] flex items-start shadow-xl sm:col-span-3'>
                    <div className='mx-auto'>
                        <button onClick={createBlog}>
                            <span>Create Blog(coming soon)</span>
                        </button>
                        <br />
                        <div className=''>
                            <br />
                            filter(coming soon)
                        </div>
                        <div className=''>
                            <br />
                            sort(coming soon)
                        </div>
                    </div>
                </div>
                <div className='min-h-[100px] bg-red-200 flex items-start sm:col-span-9'>
                    <div className='mx-auto'>
                        It will be blank with no Headline.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog