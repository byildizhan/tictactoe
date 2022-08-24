import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    grid: {
        alignItems: "center",
        textAlign: "center"
    },
    root: {
        flexGrow: 1,
    },
    paper1: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 150,
    },
    centerText: {
        textAlign: "center"
    },
    container1: {
        paddingTop: "23%",
        paddingLeft: "37.5%"
    },
    container2: {
        paddingTop: "19%",
        paddingLeft: "25%"
    }
}));