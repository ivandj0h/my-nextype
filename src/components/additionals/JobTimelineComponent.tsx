"use client"

import React, {JSX} from "react";
import {WorkingExperiences} from "@/utils/static-datasource/WorkingExperiences";
import {helpers} from "@/components/additionals/helpers";

const JobTimelineComponent: React.FC = (): JSX.Element => {
    return (
        <ol className="relative border-l border-gray-200 dark:border-gray-700 mb-40">
            {WorkingExperiences.map((experience) => {
                const period_counter = helpers(experience.job_period);

                return (
                    <li key={experience.job_id} className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            {experience.job_period} - ({period_counter} {period_counter > 1 ? 'years' : 'year'})
                        </time>
                        <h1 className="text-black font-bold">
                            {experience.job_title} - <span className="font-light">{experience.job_type}</span>
                        </h1>
                        <h5 className="mb-1 text-lg font-medium text-gray-600">
                            {experience.job_company}
                        </h5>
                        <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            <span className="font-normal">Job Description:</span>
                            <ul className="list-disc pl-10">
                                {experience.job_description.map((desc, index) => (
                                    <li key={index}>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                );
            })}
        </ol>
    );
}

export default JobTimelineComponent;
