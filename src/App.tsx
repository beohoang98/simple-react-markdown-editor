import classes from "./App.module.css";
import { Editor, Preview } from "./components";

function App() {
    return (
        <div className={classes.app}>
            <div className={classes.editor}>
                <Editor />
            </div>
            <div className={classes.split}></div>
            <div className={classes.preview}>
                <Preview />
            </div>
        </div>
    );
}

export default App;
