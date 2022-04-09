import React from "react";
import "./index.css"


function Table({ }) {
    return (
        <>
            <div className="og-row og-li og-li-head">
                <div className="og-li-col og-li-col-1 text-center">#</div>
                <div className="og-li-col og-li-col-2">Name</div>
                <div className="og-li-col og-li-col-3 text-center">Education</div>
                <div className="og-li-col og-li-col-4 text-center">Experience</div>
                <div className="og-li-col og-li-col-5 text-center">Bootcamp CGPA</div>
                <div className="og-li-col og-li-col-6 text-center">Availability</div>
                <div className="og-li-col og-li-col-7 text-center">Location</div>
                <div className="og-li-col og-li-col-8 text-center">Relocation</div>
            </div>
            <div className="data-row og-row og-li Experienced Engineering 7.3 ready_to_hire Andhra Pradesh Yes">
                <div className="og-li-col og-li-col-1 text-center">1</div>
                <div className="og-li-col og-li-col-2">Rohit Palem</div>
                <div className="og-li-col og-li-col-3 text-center">Engineering</div>
                <div className="og-li-col og-li-col-4 text-center">Experienced</div>
                <div className="og-li-col og-li-col-5 text-center">7.3</div>
                <div className="og-li-col og-li-col-6 text-center">Ready to hire</div>
                <div className="og-li-col og-li-col-7 text-center">Andhra Pradesh</div>
                <div className="og-li-col og-li-col-8 text-center">Yes</div>
            </div>
            <div className="data-row og-row og-li Fresher Engineering 7 graduating_in_shortly Andhra Pradesh Yes">
                <div className="og-li-col og-li-col-1 text-center">2</div>
                <div className="og-li-col og-li-col-2">Mayank</div>
                <div className="og-li-col og-li-col-3 text-center">Engineering</div>
                <div className="og-li-col og-li-col-4 text-center">Fresher</div>
                <div className="og-li-col og-li-col-5 text-center">7</div>
                <div className="og-li-col og-li-col-6 text-center">Graduating in shortly</div>
                <div className="og-li-col og-li-col-7 text-center">Andhra Pradesh</div>
                <div className="og-li-col og-li-col-8 text-center">Yes</div>
            </div>
            <div className="data-row og-row og-li Experienced Non-Engineering 8 ready_to_hire Andhra Pradesh No">
                <div className="og-li-col og-li-col-1 text-center">3</div>
                <div className="og-li-col og-li-col-2">Faviana</div>
                <div className="og-li-col og-li-col-3 text-center">Non-Engineering</div>
                <div className="og-li-col og-li-col-4 text-center">Experienced</div>
                <div className="og-li-col og-li-col-5 text-center">8</div>
                <div className="og-li-col og-li-col-6 text-center">Ready to hire</div>
                <div className="og-li-col og-li-col-7 text-center">Andhra Pradesh</div>
                <div className="og-li-col og-li-col-8 text-center">No</div>
            </div>
            <div className="data-row og-row og-li Fresher Engineering 6 graduating_in_shortly Andhra Pradesh No">
                <div className="og-li-col og-li-col-1 text-center">4</div>
                <div className="og-li-col og-li-col-2">Harsha</div>
                <div className="og-li-col og-li-col-3 text-center">Engineering</div>
                <div className="og-li-col og-li-col-4 text-center">Fresher</div>
                <div className="og-li-col og-li-col-5 text-center">6</div>
                <div className="og-li-col og-li-col-6 text-center">Graduating in shortly</div>
                <div className="og-li-col og-li-col-7 text-center">Andhra Pradesh</div>
                <div className="og-li-col og-li-col-8 text-center">No</div>
            </div>
            <div className="data-row og-row og-li Experienced Non-Engineering 7 ready_to_hire Andhra Pradesh Yes">
                <div className="og-li-col og-li-col-1 text-center">5</div>
                <div className="og-li-col og-li-col-2">Deepa</div>
                <div className="og-li-col og-li-col-3 text-center">Non-Engineering</div>
                <div className="og-li-col og-li-col-4 text-center">Experienced</div>
                <div className="og-li-col og-li-col-5 text-center">7</div>
                <div className="og-li-col og-li-col-6 text-center">Ready to hire</div>
                <div className="og-li-col og-li-col-7 text-center">Andhra Pradesh</div>
                <div className="og-li-col og-li-col-8 text-center">Yes</div>
            </div>
            <div className="data-row og-row og-li Experienced Non-Engineering 7 ready_to_hire Andhra Pradesh Yes">
                <div className="og-li-col og-li-col-1 text-center">6</div>
                <div className="og-li-col og-li-col-2">Harsha</div>
                <div className="og-li-col og-li-col-3 text-center">Non-Engineering</div>
                <div className="og-li-col og-li-col-4 text-center">Experienced</div>
                <div className="og-li-col og-li-col-5 text-center">7</div>
                <div className="og-li-col og-li-col-6 text-center">Ready to hire</div>
                <div className="og-li-col og-li-col-7 text-center">Andhra Pradesh</div>
                <div className="og-li-col og-li-col-8 text-center">Yes</div>
            </div>
        </>
    )
}

export default Table;