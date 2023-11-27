import React, {useEffect} from 'react';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Header({project}) {
    useEffect(() => {
        loadBackgroudImages();
    }, [project]);

    return (
        <header className="proj-header1">
            <div className="container mb-50">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="caption md-mb50">
                            <h1>{project.desc.name}</h1>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-end align-items-end">
                        <div className="info row">
                            <div className="col-sm-6">
                                {project.desc.hasOwnProperty("category") &&
                                    <div className="item mb-30">
                                        <h6 className="fz-16">Category</h6>
                                        <span className="sub-title ls1">{project.desc.category}</span>
                                    </div>
                                }

                            </div>
                            <div className="col-sm-6">
                                {project.desc.hasOwnProperty("loyalty-points") &&
                                    <div className="item mb-30">
                                        <h6 className="fz-16">Loyalty Points</h6>
                                        <span className="sub-title ls1">{project.desc["loyalty-points"]}</span>
                                    </div>
                                }
                                {project.desc.hasOwnProperty("advance-booking") &&
                                    <div className="item mb-30">
                                        <h6 className="fz-16">Advance Booking</h6>
                                        <span className="sub-title ls1">{project.desc["advance-booking"]}</span>
                                    </div>
                                }
                            </div>
                            <div className="col-sm-6">
                                {project.desc.hasOwnProperty("area") &&
                                    <div className="item mb-30">
                                        <h6 className="fz-16">Area</h6>
                                        <span className="sub-title ls1">{project.desc["area"]}</span>
                                    </div>
                                }
                                {project.desc.hasOwnProperty("room") &&
                                    <div className="item mb-30">
                                        <h6 className="fz-16">Rooms</h6>
                                        <span className="sub-title ls1">{project.desc["room"]}</span>
                                    </div>
                                }
                                {project.desc.hasOwnProperty("built") &&
                                    <div className="item mb-30">
                                        <h6 className="fz-16">built</h6>
                                        <span className="sub-title ls1">{project.desc["built"]}</span>
                                    </div>
                                }
                                {project.desc.hasOwnProperty("construction") &&
                                    <div className="item mb-30">
                                        <h6 className="fz-16">Construction</h6>
                                        <span className="sub-title ls1">{project.desc["construction"]}</span>
                                    </div>
                                }
                                {project.desc.hasOwnProperty("operation") &&
                                    <div className="item mb-30">
                                        <h6 className="fz-16">Operation</h6>
                                        <span className="sub-title ls1">{project.desc["operation"]}</span>
                                    </div>
                                }
                            </div>
                            <div className="col-sm-6">
                                <div className="item mb-30">
                                    <h6 className="fz-16">Location</h6>
                                    <span className="sub-title ls1">{project.desc.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-img" data-background={project.desc.imgs[0]}></div>
        </header>
    )
}

export default Header
