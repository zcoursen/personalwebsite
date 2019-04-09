import React, { Component } from 'react';
import Resume from './Resume.json';
import Exp from './WorkExperience.json';
import Projects from './CodingExpierence.json'
import './Content.css';

class Content extends Component {

    render() {
  
        return (
            <div>
                <div className="resume_content">
                        <h5 className="resume_title">{Resume.basics.name}</h5>
                        <h6 className="resume_grouping">Skills</h6>
                        <p className="resume_paragraph">{Resume.technical.title}: {Resume.technical.languages}</p>
                        <p className="resume_paragraph">{Resume.technical.databases}</p>
                        <p className="resume_paragraph">{Resume.technical.developement_tools} </p>
                        <p className="resume_paragraph">{Resume.technical.developement}</p>
                        <p className="resume_paragraph">{Resume.technical.cms}</p>
                        <p className="resume_paragraph">{Resume.technical.office}</p>
                        <p className="resume_paragraph">{Resume.technical.operating_systems}</p>
                        <p className="resume_paragraph">{Resume.technical.other}</p>
                        <h6 className="resume_grouping">Experience</h6>
                    </div>
                    
                    {Exp.map((i, index) => {
                        return i.experience.map(exp => {
                            return exp.description.map(j => {

                                return <div key={index}>
                                 <p className="resume_paragraph">{exp.employer}</p>
                                 <p className="resume_paragraph">{exp.title}</p>
                                 <p className="resume_paragraph">{exp.date}</p>
                                    <ul>
                                        <li className="resume_list">{j.p1}</li>
                                        <li className="resume_list">{j.p2}</li>
                                        <li className="resume_list">{j.p3}</li>
                                        <li className="resume_list">{j.p4}</li>
                                        <li className="resume_list">{j.p5}</li>
                                        <li className="resume_list">{j.p6}</li>
                                       {  j.p7 != null ? <li className="resume_list">{j.p7}</li> : null }
                                       {  j.p8 != null ? <li className="resume_list">{j.p8}</li> : null }
                                       {  j.p9 != null ? <li className="resume_list">{j.p9}</li> : null }
                                     </ul>
                                 <br/>
                                </div> 
                                })
                            })
                        })}
                    <div>
                        <h6 className="resume_grouping">Projects</h6>
                    </div>

                    {Projects.map((i, index) => {
                        return i.project.map(j => {
                            return j.description.map(p => {
                                return <div key={index}>
                                <p className="resume_paragraph">{j.title}</p>
                                <ul>
                                    {  p.p1 != null ? <li className="resume_list">{p.p1}</li> : null }
                                    {  p.p2 != null ? <li className="resume_list">{p.p2}</li> : null }
                                    {  p.p3 != null ? <li className="resume_list">{p.p3}</li> : null }
                                    {  p.p4 != null ? <li className="resume_list">{p.p4}</li> : null }
                                    {  p.p5 != null ? <li className="resume_list">{p.p5}</li> : null }
                                </ul>
                                </div>
                            })
                        })
                    })}
            </div>
        )     
    }
}

export default Content;