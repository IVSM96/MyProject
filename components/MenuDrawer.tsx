import { useState } from "react"
import { IconButton, Drawer } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import styles from '../styles/style.module.scss'
import { Menu } from "./Menu";

export const MenuDrawer = () => {
    const [open, setOpen] = useState(false)

return (
    <>
        <div className={styles.draver_header}>
            <IconButton onClick={() => setOpen(true)}><MenuIcon/></IconButton>
            <Menu/>   
        </div> 
        <Drawer
        open={open}
        onClose={() => setOpen(false)}
        >
        Тут содержится контент
        </Drawer>   
    </>
)
}