import '../stylesheet/project.css';
import useFetch from '../utils/useFetch';

const ProjectComponent = () => {
    const { data, isPending, error } = useFetch('/project');
    return (
        <div>
            {
               (data) &&
                data.map(item => (
                    <article key={item.id}>
                        <img src={item.image} alt="Image Error" />
                        <span className='container'> 
                            <h2>{item.title} </h2>
                            <p>{item.body}</p>
                        </span>
                    </article>
                ))
              
            }
            <hr className="underline" />
        </div>

    );
}

export default ProjectComponent;