import { Link } from "react-router-dom";

interface props { }

const Home: React.FC<React.PropsWithChildren<props>> = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center p-4">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl  text-center">
                <h1 className="text-4xl font-extrabold mb-6 text-gray-800">Welcome to Simple Blogging Website</h1>
                <p className="mb-6 text-lg text-gray-700">
                    Hi there, This is a basic blogging website made as a sample project as part of the course Cohort-2.
                    Frontend using React, Backend with Hono, Postgres with Prisma as Database, Zod validation, Authentication using JWT, Tailwind as styling framework.
                </p>
                <p className="mb-6 text-lg text-gray-700">
                    This is a basic website, still has to add a lot of functionality and styling.
                    Click on the below options to get redirected into the routes.
                    Make sure you are signed in before you get into Blogs routes.
                </p>
                <div className=" flex justify-around items-center">
                    <Link to="/signin" className="text-xl text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-full transition duration-300">Signin</Link>
                    <Link to="/signup" className="text-xl text-white bg-green-600 hover:bg-green-700 py-2 px-4 rounded-full transition duration-300">Signup</Link>
                    <Link to="/blogs" className="text-xl text-white bg-purple-600 hover:bg-purple-700 py-2 px-4 rounded-full transition duration-300">Blogs</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;