import React from "react";

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                           Summary
                        </h2>
                        <p className="mt-6 text-gray-600">
                        As a passionate and dedicated newcomer to the world of software development, I bring proficiency in fundamental web
technologies like HTML, CSS, and JavaScript. My solid foundation in Data Structures and Algorithms, coupled with a strong grasp 
of Object-Oriented Programming principles, forms the basis of my problem-solving abilities. I am an enthusiastic Reactdeveloper
with hands-on experience in building projects that reflect my commitment to innovation and continuous learning.
                        </p>
                        {/* <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p> */}
                    </div>
                </div>
            </div>
        </div>
    );
}