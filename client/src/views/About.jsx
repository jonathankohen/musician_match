import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

import jams from '../images/danny.jpeg';
import pros from '../images/elijah.jpeg';
import teachers from '../images/guitars.jpeg';
import bands from '../images/john_tyson.jpeg';

export default function About() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <Container>
            <Row className="my-5">
                <Col md>
                    <Jumbotron
                        className="shadow-lg mx-auto animate__animated animate__fadeIn"
                        id="landing_hero"
                    >
                        <h1 className="display-3 font-weight-bolder textShadowSm mb-4">
                            Connect quickly.
                        </h1>
                        <blockquote className="blockquote">
                            <p className="mb-0 lead">
                                “Who hears music, feels his solitude peopled at
                                once.”
                            </p>
                            <footer className="blockquote-footer">
                                Robert Browning{' '}
                                <cite title="Balaustion's Adventure (1871)">
                                    Balaustion's Adventure
                                </cite>
                            </footer>
                        </blockquote>
                        <hr className="my-2" />
                        <p>
                            <em>
                                <strong>Musician Match</strong>
                            </em>{' '}
                            is a one-stop-shop for musicians to find each other.
                            Simply input your location, what type of musician
                            you're seeking, what instruments you play, and a
                            short bio. Our database will help you find the
                            closest ideal collaborator! Once you're ready, just
                            shoot them an email. It's that simple! Sign up below
                            to get started.
                        </p>
                        <Link
                            to="/"
                            className="btn btn-primary btn-lg shadow btnLight"
                        >
                            Sign Up
                        </Link>
                    </Jumbotron>
                </Col>
            </Row>

            {loaded ? (
                <Row className="mb-5">
                    <Col className="mb-5">
                        <CardDeck>
                            <Card className="shadow-lg" id="bands">
                                <Card.Img
                                    className="card-img-top"
                                    src={bands}
                                    alt="Band Members"
                                />
                                <Card.Body>
                                    <Card.Title>Band Members</Card.Title>
                                    <Card.Text>
                                        Find musicians near you with similar
                                        influences that play whatever instrument
                                        you need to complete your line-up.
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card className="shadow-lg" id="pros">
                                <Card.Img
                                    className="card-img-top"
                                    src={pros}
                                    alt="Professionals"
                                />
                                <Card.Body>
                                    <Card.Title>Professionals</Card.Title>
                                    <Card.Text>
                                        If you're looking for a wedding band, a
                                        string quartet, or just some local
                                        musicians for hire, you've come to the
                                        right place!
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card className="shadow-lg" id="teachers">
                                <Card.Img
                                    className="card-img-top"
                                    src={teachers}
                                    alt="Teachers"
                                />
                                <Card.Body>
                                    <Card.Title>Teachers</Card.Title>
                                    <Card.Text>
                                        Always wanted to learn how to play
                                        drums? Guitar? Bass? You can easily find
                                        a new teacher near you with just a few
                                        clicks.
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card className="shadow-lg" id="jams">
                                <Card.Img
                                    className="card-img-top"
                                    src={jams}
                                    alt="Jam Sessions"
                                />
                                <Card.Body>
                                    <Card.Title>Jam Sessions</Card.Title>
                                    <Card.Text>
                                        We'll help you get matched up with a
                                        musician nearby who has similar
                                        influences. You can search by instrument
                                        as well.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>
            ) : (
                <Container className="d-flex justify-content-center">
                    <Spinner animation="border" role="status" variant="success">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </Container>
            )}
        </Container>
    );
}
