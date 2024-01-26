
import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSidebar from "./components/ProjectSidebar.jsx";

function App() {
  const [projectsState,setProjectState] = useState({
    selectedProjectId : undefined,
    projects : []
  });




function handleStartAddProject(){
  setProjectState(prevState =>{
    console.log('test');
    return {
      ...prevState,
      selectedProjectId : null,

    }
  })
}
function handleAddProject(projectData){
  setProjectState(prev => {
    const newProject = {
      ...projectData,
      id: Math.random()
    }

    return {...prev,
    projects : [...prev.projects, newProject],
    selectedProjectId : undefined
    }
  })
}

console.log(projectsState);


let content;
if(projectsState.selectedProjectId === null){
  content = <NewProject onAdd={handleAddProject}/>
} else if (projectsState.selectedProjectId === undefined){
  content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
} 

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects}/>
        {content}
      </main>
    </>
  );
}

export default App;
