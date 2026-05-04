import Estudiante from "../components/estudiante";

const EstudiantesPage = () => {
    return (
        <div>
            <Estudiante nombre={"Mariano G. Zambrano"} edad={22} url={"https://www.google.com"}/>
            <Estudiante nombre={"Domenica C. Pinto"} edad={23} url={"https://www.youtube.com"}/>
            <Estudiante nombre={"Harold S. Ramirez"} edad={37} url={"https://www.airbnb.com"}/>
        </div>
    )
}
export default EstudiantesPage;