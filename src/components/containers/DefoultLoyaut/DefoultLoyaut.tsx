import { Outlet } from "react-router";
import Header from "./Headex";

const DefoultLayout = () => {
    return (
        <>
        <Header />
        <div className="container">
            <Outlet />
        </div>
        </>
    );
}

export default DefoultLayout;