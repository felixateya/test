import Navbar from "../Components/Navbar";

function Clients() {
  return (
    <div className="Clients">
        <Navbar/>
      <h1> Some of my Clients</h1>

      <div className="figure">
        <figure>
          <div className="imgOne"></div>
          <figcaption>Alex Tuntuni</figcaption>
        </figure>
        <figure>
          <div className="imgTwo"></div>
          <figcaption>Sasha Blake</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Clients;
