import '../stylesheet/resume.css';


const ResumeBody = () => {
    return (
        <body>
            <div className="prof">
                <h4>Professional ​info​​</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ratione ut eius id, harum ducimus natus
                perferendis dignissimos vel eos illo rerum voluptate obcaecati sed rem molestias odio, repudiandae maiores voluptatem! Architecto,
                 eum quasi.</p>
            </div>
            <hr id="underline" />

            <div className="prof">
                <h4>Work​ experience​</h4>

                <div id="xyz">
                {/* experience​ body here */}
                    <div className="prof">
                    <h5>Intern.</h5>
                    <h6>06/2010 - 06/2010</h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ratione ut eius id, harum ducimus natus
                    perferendis dignissimos vel eos illo rerum voluptate obcaecati sed rem molestias odio, repudiandae maiores voluptatem! Architecto,
                     eum quasi.</p>
                    </div>
                {/* experience​ body here */}
                </div>
            </div>
            <hr id="underline" />

            <div className="prof">
                <h4>Education​</h4>

                <div id="xyz">
                {/* education body here */}
                    <div className="prof">
                    <h5>University name</h5>
                    <h6>06/2010 - 06/2010</h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ratione ut eius id, harum ducimus natus
                    perferendis dignissimos vel eos illo rerum voluptate obcaecati sed rem molestias odio, repudiandae maiores voluptatem! Architecto,
                     eum quasi.</p>
                    </div>
                {/* education body here */}
                </div>
            </div>


        </body>
    );
}

export default ResumeBody;