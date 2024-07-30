import { Button } from "primereact/button";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function Root() {
    const navigate = useNavigate()

    const handleClick = (route: string) => {
        navigate(`/${route}`)
    }

    return (
        <div className="login-body">
            <div className="mr-2">
                <Button label="Form Component" onClick={() => handleClick("form")}></Button>
            </div>
            <div>
                <Button label="Redux Component" onClick={() => handleClick("redux")}></Button>
            </div>
        </div>
    )
}