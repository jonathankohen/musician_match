import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import ExampleImage from '../assets/images/lind.jpeg';
import ExampleImage2 from '../assets/images/drumset.jpeg';
import ExampleImage3 from '../assets/images/horns.jpg';

import LikeButton from './LikeButton';
import SuperLikeButton from './SuperLikeButton';
import DislikeButton from './DislikeButton';

export default function Person({
    firstName,
    lastName,
    bio,
    _id,
    choiceHandler,
}) {
    return (
        <>
            {/* TODO: map by user uploads */}
            <div className="card person_card my-5 p-5">
                <Carousel interval={null}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded"
                            src={ExampleImage}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded"
                            src={ExampleImage2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded"
                            src={ExampleImage3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

                <div className="card-body">
                    <h4 className="card-title mt-4 mb-2">
                        {/* TODO: render conditionally */}
                        {/* {firstName} {lastName} */}
                        Charlie Jacobs, <span className="h1">28</span>
                    </h4>

                    <p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-house mr-2 mb-1"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                            />
                            <path
                                fillRule="evenodd"
                                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                            />
                        </svg>
                        {/* TODO: calculate dynamically */}
                        Lives in Boston
                    </p>

                    <p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-music-note-beamed mr-2 mb-1"
                            viewBox="0 0 16 16"
                        >
                            <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
                            <path
                                fillRule="evenodd"
                                d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"
                            />
                            <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
                        </svg>
                        {/* TODO: calculate dynamically */}
                        Plays guitar
                    </p>

                    <p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-geo-alt mr-2 mb-1"
                            viewBox="0 0 16 16"
                        >
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        {/* TODO: calculate dynamically */}
                        12 miles away
                    </p>

                    <div className="row">
                        <a
                            // TODO: calculate dynamically
                            href="http://granitetoglass.bandcamp.com"
                            target="_blank"
                            rel="noreferrer"
                            className="ml-3"
                        >
                            <span className="badge badge-pill badge-primary">
                                Music
                            </span>
                        </a>

                        <a
                            // TODO: calculate dynamically
                            href="http://granitetoglass.com"
                            target="_blank"
                            rel="noreferrer"
                            className="ml-2"
                        >
                            <span className="badge badge-pill badge-primary">
                                Website
                            </span>
                        </a>
                    </div>

                    {/* TODO: calculate bio dynamically */}
                    {/* <p className="card-text">{bio}</p> */}
                    <p className="card-text mt-3 mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Labore, modi. Culpa perferendis iusto nesciunt officia
                        architecto! Eveniet, cupiditate pariatur accusamus
                        eligendi recusandae, libero, debitis ut fugiat
                        doloremque odit incidunt dolor! Ratione architecto
                        dolorum facilis exercitationem corporis nulla, dicta id
                        illo qui quod dolorem fugiat sequi repellendus beatae
                        est optio adipisci dolor veritatis! Provident quam
                        molestiae ipsam tempora quos fugiat distinctio? Hic
                        voluptatibus tenetur repellendus dolores nesciunt velit
                        asperiores ipsum quos voluptas! Amet rerum ratione,
                        pariatur repellat at totam id. Nostrum nobis commodi
                        laborum vero non libero atque id provident incidunt.
                        Ducimus, mollitia, autem quisquam repudiandae error
                        harum enim laudantium esse reprehenderit dolorem dicta
                        culpa possimus facere doloribus? Distinctio deserunt
                        labore totam quos repellendus consectetur, tempore harum
                        magni voluptatum rerum sapiente! Voluptatem obcaecati
                        blanditiis consequuntur illum voluptas dolore
                        consequatur, repellendus nihil molestiae repellat sequi
                        nulla a laborum saepe?
                    </p>

                    <div className="container row d-flex justify-content-around">
                        <DislikeButton
                            otherUserId={_id}
                            choiceHandler={choiceHandler}
                        />
                        <SuperLikeButton
                            otherUserId={_id}
                            choiceHandler={choiceHandler}
                        />
                        <LikeButton
                            otherUserId={_id}
                            choiceHandler={choiceHandler}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
