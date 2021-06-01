import React from 'react';

import ExampleImage from '../images/lind.jpeg';

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
            <div className="card my-5 p-5">
                <img
                    src={ExampleImage}
                    className="card-img-top mx-auto"
                    alt="Example user"
                    // style={{ width: '18rem' }}
                    // style={{ objectFit: 'contain' }}
                />
                <div className="card-body">
                    <div className="d-flex justify-content-around">
                        <p className="card-text">
                            <a href="http://granitetoglass.com">
                                <strong>Music Link</strong>
                            </a>
                        </p>

                        <p className="card-text">
                            <a href="http://granitetoglass.com">
                                <strong>Website</strong>
                            </a>
                        </p>
                    </div>

                    <h4 className="card-title">
                        {/* {firstName} {lastName} */}
                        Charlie Jacobs
                    </h4>
                    {/* <p className="card-text">{bio}</p> */}
                    <p className="card-text">
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
                        nulla a laborum saepe? Temporibus quia non repudiandae a
                        expedita similique voluptate quasi, dicta ducimus,
                        tempora amet. Alias assumenda reiciendis exercitationem.
                        Exercitationem sit similique quisquam dicta facilis eos
                        beatae, aperiam eveniet consequuntur adipisci molestiae
                        itaque qui reiciendis, debitis quidem rerum voluptatum.
                        Deserunt similique laudantium itaque deleniti
                        dignissimos. Quo nemo repudiandae itaque corporis atque
                        autem placeat impedit illum expedita qui maxime,
                        mollitia cupiditate minus numquam adipisci ipsam commodi
                        laborum sint exercitationem quaerat? Doloremque nisi
                        nostrum repellendus error aspernatur! Assumenda tempore
                        libero deleniti nihil iusto, nemo voluptatem cum
                        voluptatibus excepturi sint optio aliquid doloremque qui
                        ad, ipsum placeat tenetur minima quaerat enim quod ex
                        sequi. Alias atque molestias quos.
                    </p>

                    <div className="container d-flex justify-content-around">
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
