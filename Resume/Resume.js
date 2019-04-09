import React, {Component} from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';
import Content from './Content';

import "./Resume.css";

class Resume extends Component {
    
    resume;

    exportPDF = () => {
        this.resume.save();
    }


    render() {
            return(
                <div className="container">
                    <div className="resume-header" >
                    </div>
                    <h1 className="header-resume">Resume</h1>
                    <div className="backGround">
                            <PDFExport paperSize={'Letter'}
                            fileName="Zack Coursen.pdf"
                            title="Zack's Resume"
                            subject="Resume"
                            keywords=""
                            ref={(r) => this.resume = r}>
                            <div className="letterHead">
                                <Content/>
                            </div>
                            </PDFExport>
                        <div className="button-container">
                            <button className="downLoadButton" onClick={this.exportPDF}>Download</button>
                        </div>
                    </div>
                </div>
        );
    }
}
 export default Resume;