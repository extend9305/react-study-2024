import Button from "./Button.jsx";

export default function ProjectSidebar({onStartAddProject, onSelectProject ,selectedProjectId, projects}) {

    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject} children="+ Add project"/>
            </div>
            <ul>
                {projects.map((project) => {
                     let classes = "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-sotne-800";
                    if(selectedProjectId === project.id){
                        classes += " bg-stone-800 text-stone-200";
                    }else{
                        classes += " text-stone-400";
                    }

                    return <li key={project.id}>
                        <button onClick={()=>onSelectProject(project.id)} className={classes }>{project.title}</button>
                    </li>
                })}
            </ul>

        </aside>
    );
}