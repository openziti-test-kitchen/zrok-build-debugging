import "bootstrap/dist/css/bootstrap.min.css";
import ShareCard from "./ShareCard.jsx";
import AccessCard from "./AccessCard.jsx";
import LanIcon from "@mui/icons-material/Lan";
import ShareIcon from "@mui/icons-material/Share";

const Overview = (props) => {
    let cards = [];
    if(props.overview.size > 0) {
        props.overview.forEach((row) => {
            switch(row.type) {
                case "share":
                    cards.push(<ShareCard releaseShare={props.releaseShare} share={row.v} key={row.v.token} />);
                    break;

                case "access":
                    cards.push(<AccessCard releaseAccess={props.releaseAccess} access={row.v} key={row.v.frontendToken} />);
                    break;
            }
        });
    } else {
        cards.push(<div key="help" className={"card"}>
            <h5>Your zrok Agent is empty! Add a <a href="#" onClick={props.shareClick}>share <ShareIcon /></a> or <a href={"#"} onClick={props.accessClick}>access <LanIcon /></a> share to get started.</h5>
        </div>);
    }

    return <>{cards}</>;
}

export default Overview;
