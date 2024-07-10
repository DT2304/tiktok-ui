import classNames from "classnames/bind";
import Styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(Styles)
function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img className={cx("avatar")} alt="Hoaa" src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4b85df94ddbc913a995d4d721e417580.jpeg?lk3s=30310797&nonce=63323&refresh_token=2f4427630d7121d675cbc17a4213483a&x-expires=1720522800&x-signature=V%2BqFqwcp%2BvQvrXgW9Go%2FLqOTHO4%3D&shp=30310797&shcp=-" />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
                </h4>
                <span className={cx("username")}>
                    Nguyen Van a
                </span>
            </div>
        </div>
    );
}

export default AccountItem;