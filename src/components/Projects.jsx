import { useEffect, useState } from "react";
import Project from "./Project";

function Projects() {
    const [projects, setProjects] = useState(null);
    const [isLoading, setIsloading] = useState(true);

    const fetchData = async () => {
        const response = await fetch("/data.json");
        const data = await response.json();
        setProjects(data);
        setIsloading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (projects === null) return <h1>No Project Yet.</h1>;

    return (
        <div className="md:p-10">
            {isLoading && <h1>Loading Please wait...</h1>}
            {projects.map((project) => (
                <Project project={project} key={project.id} />
            ))}
        </div>
    );
}

export default Projects;
