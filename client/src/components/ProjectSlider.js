
import React from "react";
import Slider from "react-slick";
import projectData from '../data/projectData';
import WhiteTypography from './WhiteTypography';
import ProjectCard from './ProjectCard';

export default function ProjectSlider() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 400
    };

    return (
        <div className="container" style={{ marginTop: "5rem" }}>
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <WhiteTypography variant="h4">My Projects</WhiteTypography>
            <Slider {...settings} style={{ marginTop: "5rem" }}>
            {projectData.map((item, index) => (
                <div key={item.id}>
                    <ProjectCard title={item.title} desc={item.desc} tech={item.tech} img={item.img} color1={item.color1} color2={item.color2} />
                </div>
            ))}
            </Slider>
        </div>
    );
}
