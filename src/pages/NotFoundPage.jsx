import { Link } from "react-router";

function NotFoundPage() {
  return (
    <div className="page">
      <p className="kicker">404</p>
      <h1>Siden findes ikke</h1>
      <p className="lead">Den side, du leder efter, er ikke her.</p>
      <div className="detail-actions">
        <Link className="button solid" to="/">
          Til forsiden
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
