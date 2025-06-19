import React from 'react';

const ResourcesPage = () => {
    return (
        <div className="max-w-screen-xl mx-auto p-8">
            <h1 className="text-4xl font-bold text-center mb-12 text-black">PCOS Detection Resources</h1>

            <div className="flex justify-center place-content-center mb-12">
                <iframe
                 className="w-full h-96 border-0"
                  src="https://www.youtube.com/embed/dF0favR4GIM?si=5wxWpKickjeIwy84" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
            </div>

            <section className="space-y-8">
                <h2 className="text-3xl font-semibold text-center text-black">Learn More About PCOS Detection</h2>

                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-700">Articles & Studies</h3>
                    <ul className="list-none pl-4">
                        <li>
                            <a
                                href="https://www.dev.to/pocossd/pcos-detection-using-machine-learning-3dc2"
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-600 hover:underline text-lg"
                            >
                                PCOS Detection Using Machine Learning - A comprehensive guide on how machine learning is transforming PCOS detection.
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://ieeexplore.ieee.org/document/10214584"
                                target="_blank"
                                rel="noreferrer"

                                className="text-blue-600 hover:underline text-lg"
                            >
                                A Review on Detection Techniques of PCOS Using Machine Learning (IEEE Xplore)
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.healthline.com/health/pcos/diagnosis"
                                target="_blank"
                                rel="noreferrer"

                                className="text-blue-600 hover:underline text-lg"
                            >
                                Healthline: How PCOS is Diagnosed - An overview of traditional and modern diagnostic methods for PCOS.
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-700">Detection Tools & Technologies</h3>
                    <ul className="list-none pl-4">
                        <li>
                            <a
                                href="https://www.iosrjournals.org/iosr-jdms/papers/Vol13-issue6/Version-3/F1306035864.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-600 hover:underline text-lg"
                            >
                                Detection of PCOS Using Ultrasound and Hormonal Analysis
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://pubmed.ncbi.nlm.nih.gov/33268291/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-600 hover:underline text-lg"
                            >
                                Hormonal Markers and Biomarkers for PCOS Detection
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8975060/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-600 hover:underline text-lg"
                            >
                                Machine Learning Models for Predicting PCOS Risk
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

           
        </div>
    );
};

export default ResourcesPage;
