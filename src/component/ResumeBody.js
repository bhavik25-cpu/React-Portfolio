import '../stylesheet/resume.css';
import useFetch from '../utils/useFetch';

const ResumeBody = () => {
    const { data, isPending, error } = useFetch('/resume/prof');
    const { data: edu, isPending: p5, error: e5 } = useFetch('/resume/education');
    const { data: wexp, isPending: p2, error: e3 } = useFetch('/resume/workexp');


    return (
        <body>
            <div className="prof">
                <h4>Professional ​info​​</h4>
                {data && <p>{data}</p>}
            </div>
            <hr id="underline" />

            <div className="prof">
                <h4>Work​ experience​</h4>

                <div id="xyz">
                    {
                        (wexp) &&
                        wexp.map(item => (
                            <div className="prof" key={item.id}>
                                <h5>{item.title}</h5>
                                <h6>{item.time}</h6>
                                <p>{item.body}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <hr id="underline" />

            <div className="prof">
                <h4>Education​</h4>

                <div id="xyz">
                    {
                        (edu) &&
                        edu.map(item => (
                            <div className="prof" key={item.id}>
                                <h5>{item.title}</h5>
                                <h6>{item.time}</h6>
                                <p>{item.body}</p>
                            </div>
                        ))
                    }
                </div>
            </div>


        </body>

    );
}

export default ResumeBody;