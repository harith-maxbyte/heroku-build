import * as React from 'react';
import { FiChevronDown } from "react-icons/fi";
import { Button, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList } from '@material-ui/core';
import './Styles.css';
export default function Maplist() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);


    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);

    return (
        // <Stack direction="row" spacing={2}>

        <div style={{ position: "relative", zIndex: 2 }}>


            <Button
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                endIcon={<FiChevronDown />}
            >
                Sales
            </Button>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                        }}
                    >
                        <Paper style={{ maxWidth: window.innerWidth }}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                >
                                    {/* <div style={{display:"flex",flexDirection:"row"}}> */}
                                    <MenuItem onClick={handleClose}>
                                        {/* <svg class="svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.4041 11.176H10.6802L16.4902 16.9859C16.7122 17.2079 17.0777 17.226 17.306 17.0109C18.7288 15.6704 19.7074 13.8635 19.9946 11.8322C20.0438 11.4844 19.7552 11.176 19.4041 11.176ZM18.8221 8.79362C18.5192 4.40171 15.0096 0.892161 10.6177 0.58922C10.2824 0.566058 10.0001 0.848778 10.0001 1.18481V9.41126H18.2269C18.5629 9.41126 18.8453 9.12891 18.8221 8.79362ZM8.23537 11.176V2.45208C8.23537 2.10098 7.92692 1.81238 7.57949 1.86164C3.19824 2.48076 -0.150655 6.30833 0.00522741 10.8954C0.165522 15.6065 4.22177 19.4697 8.93501 19.4105C10.7879 19.3873 12.5001 18.7903 13.9078 17.7918C14.1982 17.5859 14.2174 17.1583 13.9655 16.9065L8.23537 11.176Z" fill="#B9B8B8" />
                                            </svg> */}
                                        Energy usage
                                    </MenuItem>
                                    {/* </div> */}
                                    <MenuItem onClick={handleClose}>
                                        {/* <svg class="svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.4041 11.176H10.6802L16.4902 16.9859C16.7122 17.2079 17.0777 17.226 17.306 17.0109C18.7288 15.6704 19.7074 13.8635 19.9946 11.8322C20.0438 11.4844 19.7552 11.176 19.4041 11.176ZM18.8221 8.79362C18.5192 4.40171 15.0096 0.892161 10.6177 0.58922C10.2824 0.566058 10.0001 0.848778 10.0001 1.18481V9.41126H18.2269C18.5629 9.41126 18.8453 9.12891 18.8221 8.79362ZM8.23537 11.176V2.45208C8.23537 2.10098 7.92692 1.81238 7.57949 1.86164C3.19824 2.48076 -0.150655 6.30833 0.00522741 10.8954C0.165522 15.6065 4.22177 19.4697 8.93501 19.4105C10.7879 19.3873 12.5001 18.7903 13.9078 17.7918C14.1982 17.5859 14.2174 17.1583 13.9655 16.9065L8.23537 11.176Z" fill="#B9B8B8" />
                                            </svg> */}
                                        Sales
                                    </MenuItem>
                                    <div class="icon">
                                        <MenuItem onClick={handleClose}>
                                            {/* <svg class="svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.4041 11.176H10.6802L16.4902 16.9859C16.7122 17.2079 17.0777 17.226 17.306 17.0109C18.7288 15.6704 19.7074 13.8635 19.9946 11.8322C20.0438 11.4844 19.7552 11.176 19.4041 11.176ZM18.8221 8.79362C18.5192 4.40171 15.0096 0.892161 10.6177 0.58922C10.2824 0.566058 10.0001 0.848778 10.0001 1.18481V9.41126H18.2269C18.5629 9.41126 18.8453 9.12891 18.8221 8.79362ZM8.23537 11.176V2.45208C8.23537 2.10098 7.92692 1.81238 7.57949 1.86164C3.19824 2.48076 -0.150655 6.30833 0.00522741 10.8954C0.165522 15.6065 4.22177 19.4697 8.93501 19.4105C10.7879 19.3873 12.5001 18.7903 13.9078 17.7918C14.1982 17.5859 14.2174 17.1583 13.9655 16.9065L8.23537 11.176Z" fill="#B9B8B8" />
                                            </svg> */}
                                            Maintenance request
                                        </MenuItem>
                                    </div>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
        // </Stack>
    );
}
