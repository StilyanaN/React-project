import '../../../assets/css/style.css';  // Adjust the path if needed
import { Slide } from "react-awesome-reveal";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      src: "img/team-1.jpg",
      name: "John Doe",
      designation: "Head Chef",
    },
    {
      id: 2,
      src: "img/team-2.jpg",
      name: "Jane Smith",
      designation: "Pastry Chef",
    },
    {
      id: 3,
      src: "img/team-3.jpg",
      name: "Sam Wilson",
      designation: "Sous Chef",
    },
    {
      id: 4,
      src: "img/team-4.jpg",
      name: "Paul Brown",
      designation: "Ice Cream Artist",
    },
  ];

  return (
    <Slide direction="left" duration={2500} triggerOnce>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="section-title position-relative mb-5">
                Experienced &amp; Most Famous Ice Cream Chefs
              </h1>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0"></div>
          </div>
          <div className="row">
            <div className="col-12">
              <OwlCarousel
                className="team-carousel owl-theme"
                loop
                margin={30}
                nav
                dots={false}
                autoplay
                autoplayTimeout={5000}
                autoplayHoverPause
                responsive={{
                  0: {
                    items: 1,
                  },
                  768: {
                    items: 2,
                  },
                  1000: {
                    items: 3,
                  },
                }}
              >
                {teamMembers.map((member) => (
                  <div className="team-item" key={member.id}>
                    <div className="team-img mx-auto">
                      <img
                        className="rounded-circle w-100 h-100"
                        src={member.src}
                        style={{ objectFit: "cover" }}
                        alt={member.name}
                      />
                    </div>
                    <div
                      className="position-relative text-center bg-light rounded px-4 py-5"
                      style={{ marginTop: "-100px" }}
                    >
                      <h3 className="font-weight-bold mt-5 mb-3 pt-5">
                        {member.name}
                      </h3>
                      <h6 className="text-uppercase text-muted mb-4">
                        {member.designation}
                      </h6>
                      <div className="d-flex justify-content-center pt-1">
                        <a
                          className="btn btn-outline-secondary btn-social mr-2"
                          href="#"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a
                          className="btn btn-outline-secondary btn-social mr-2"
                          href="#"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                          className="btn btn-outline-secondary btn-social mr-2"
                          href="#"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
