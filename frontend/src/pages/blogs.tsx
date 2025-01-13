import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import docker from "../assets/docker.png"
import Navbar from '../components/Navbar';
import { atom, selector, useRecoilValueLoadable, RecoilRoot } from 'recoil';
import { blogBackend } from '../axios/backend';

import React, { useState } from 'react';


export default function Blogs() {
    const params = useParams();
    const blogsLoadable: any = useRecoilValueLoadable(blogsAtom);

    let blogs;
    switch (blogsLoadable.state) {

        case "hasValue": {
            blogs = (blogsLoadable.contents.map((blog: blogProps) => (<Blog title={blog.title} key={blog.id} id={blog.id} content={blog.content} />)))
            break;
        };
        case "loading": {
            blogs = <div>..... Loading <br /> Hold on we are loading your blogs</div>
            // console.dir(blogsLoadable);
            break;
        };
        case "hasError": {
            blogs = <div>Eror while fetching the blogs</div>
            break;
        }
    }

    return (
        <div>
            <div className="mb-8"><Navbar /></div>
            <div className='w-[60%] mx-auto'>
                <div>
                    {blogs}
                </div>
            </div>
        </div>
    )
}

interface blogProps {
    id?: string,
    authorName?: string,
    publishedDate?: string,
    title: string,
    content: string,
    category?: string,
    readTime?: string,
}

const Blog: React.FC<blogProps> = ({ authorName = "Devarshi Balu", publishedDate = "Jan 13, 2025", title, content, category = "Side Hustle", readTime = "3 min", id }) => {
    const navigate = useNavigate();

    return (
        <div className='flex border-t-2 w-full border-t-slate-300 py-8 justify-between items-center '>
            <div className='w-[70%] flex-col flex font-sans col-span-8 flex-shrink-1' >
                <div className="w-full flex justify-start items-center gap-2 ">
                    <div className="w-12 h-12 text-lg font-semibold rounded-full flex justify-center items-center bg-slate-300">{authorName[0]}</div>
                    <div className="text-lg font-normal">{authorName.split(" ")[0]}</div>
                    <div className="font-light text-normal">{publishedDate}</div>
                </div>
                <div className="font-bold text-xl my-1 px-0 pt-2 hover:border-none"><button onClick={handleOnClickForBlog}>{title}</button></div>
                <div className="font-normal text-base my-1">{content.slice(0, 50)}...</div>
                <div className="mt-4 py-1 flex justify-between items-start">
                    <div className="flex justify-start gap-2 items-center">
                        <div className="bg-slate-200 rounded-2xl h-max py-1 px-2">{category}</div>
                        <div className="text-sm text-slate-600">{readTime} read</div>
                    </div>
                    <div className='flex justify-start gap-4 items-center'>
                        <div className="flex flex-col justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8 text-slate-500 ">
                                <path strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                            </svg>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8 text-slate-500">
                                <path strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                        <div className="font-bold text-slate-500 flex flex-col justify-center ">
                            <button className="h-max w-max hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="font-semibold h-8 w-8 text-slate-500 " viewBox="0 0 16 16">
                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-shrink-0 w-[25%] ">
                <img src={docker} className=' w-full shrink-0 aspect-video' />
            </div>
        </div>
    )


    function handleOnClickForBlog() {
        navigate(`/blog/${id}`, {
            state: {
                state: "redirect-from-blogs",
                contents: {
                    title,
                    content
                }
            }
        });
    }
}




const blogsAtom = atom({
    key: "BlogsAtomAsyncFetch",
    default: selector({
        key: "blogsAtomSelectorAsyncFecth",
        get: async ({ get }) => {
            try {
                const res = await blogBackend({
                    url: '/bulk',
                    method: "get",
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("medium-token")
                    }
                });
                return res.data.posts;
            } catch (err: any) {
                throw new Error("erorr while fetching the posts");
            }
        }
    })
})