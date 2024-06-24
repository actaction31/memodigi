import { Drawer, IconButton } from "@mui/material";
import { CancelOutlined } from "@mui/icons-material";
import ImgList from "./ImgList";
import styles from "./ThumbnailList.module.css";

const ThumbnailList = ({
    drawerOpen,
    toggleDrawerHandler,
    thumbnailData,
    handleClick,
}) => {
    const toggleDrawer = () => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        toggleDrawerHandler();
    };
    return (
        <Drawer
            transitionDuration={{
                appear: 1000,
                enter: 1000,
                exit: 1000,
            }}
            anchor={"right"}
            open={drawerOpen}
            onClose={toggleDrawer()}
        >
            <div className={styles.thumbnail_layout}>
                <div className={styles.close_button_layout}>
                    <IconButton
                        aria-label="cancel"
                        onClick={toggleDrawerHandler}
                    >
                        <CancelOutlined className={styles.close_button} />
                    </IconButton>
                </div>
                <ImgList
                    thumbnailData={thumbnailData}
                    handleClick={handleClick}
                />
            </div>
        </Drawer>
    );
};

export default ThumbnailList;
